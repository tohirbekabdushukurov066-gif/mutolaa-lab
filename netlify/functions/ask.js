/* MUTOLAA LAB — PROKSI
   Kalit shu yerda qoladi. Brauzer bu funksiyaga murojaat qiladi,
   funksiya esa Gemini'ga. Kalit hech qachon telefonga tushmaydi. */

const MODEL = "gemini-2.5-flash";
const MAX_BELGI = 200000;
const KUNLIK_CHEK = 300;

const hisob = new Map();

function chekOsdi(ip) {
  const kun = new Date().toISOString().slice(0, 10);
  const kalit = `${ip}:${kun}`;
  const n = (hisob.get(kalit) || 0) + 1;
  hisob.set(kalit, n);
  if (hisob.size > 5000) hisob.clear();
  return n > KUNLIK_CHEK;
}

export default async (request, context) => {
  const cors = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  if (request.method !== "POST") return xato(405, "Faqat POST", cors);

  const kalit = process.env.GEMINI_API_KEY || process.env.GEMINI_KEY;
  if (!kalit) return xato(500, "Kalit sozlanmagan. Netlify'da GEMINI_API_KEY qo'ying.", cors);

  const ip = request.headers.get("x-nf-client-connection-ip") || "nomalum";
  if (chekOsdi(ip)) return xato(429, "Bugungi chegara tugadi. Ertaga davom eting.", cors);

  let body;
  try { body = await request.json(); } catch { return xato(400, "Noto'g'ri so'rov", cors); }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: matnYig(m.content) }],
  }));

  if (!contents.length) return xato(400, "Xabar yo'q", cors);
  if (JSON.stringify(contents).length > MAX_BELGI) return xato(413, "So'rov juda katta", cors);

  const payload = {
    contents,
    generationConfig: {
      maxOutputTokens: Math.min(Number(body.max_tokens) || 1000, 8192),
      temperature: 0.8,
    },
  };
  if (body.system) payload.system_instruction = { parts: [{ text: String(body.system) }] };

  const webKerak = Array.isArray(body.tools)
    && body.tools.some((t) => String(t?.type || t?.name || "").includes("web_search"));
  if (webKerak) payload.tools = [{ google_search: {} }];

  let javob;
  try {
    javob = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": kalit },
        body: JSON.stringify(payload),
      }
    );
  } catch {
    return xato(502, "Modelga ulanib bo'lmadi", cors);
  }

  if (!javob.ok) {
    return xato(
      javob.status === 429 ? 429 : 502,
      javob.status === 429
        ? "Model bandligi — birozdan keyin urinib ko'ring"
        : "Model javob bermadi",
      cors
    );
  }

  const data = await javob.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const matn = parts.map((p) => p?.text || "").filter(Boolean).join("\n");

  if (!matn) {
    const sabab = data?.candidates?.[0]?.finishReason || "";
    return xato(502, sabab === "SAFETY" ? "Javob to'sildi" : "Bo'sh javob keldi", cors);
  }

  return new Response(
    JSON.stringify({ content: [{ type: "text", text: matn }], model: MODEL, stop_reason: "end_turn" }),
    { headers: cors }
  );
};

function matnYig(c) {
  if (typeof c === "string") return c;
  if (!Array.isArray(c)) return String(c ?? "");
  return c.map((x) => (x?.type === "text" ? x.text : "")).filter(Boolean).join("\n");
}

function xato(kod, xabar, cors) {
  return new Response(JSON.stringify({ error: { message: xabar } }), { status: kod, headers: cors });
}

export const config = { path: "/api/ask" };
