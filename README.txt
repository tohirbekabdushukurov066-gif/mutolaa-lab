MUTOLAA LAB — joylashtirish

1. Netlify -> Deploys -> "browse files to upload" -> shu zip faylni tanlang.
2. Environment variables da kalit turishi kerak:
      Key:   GEMINI_API_KEY
      Value: AI Studio kaliti
   (eski GEMINI_KEY nomi ham ishlaydi)
3. Zip yuklangach "Published" bo'lishini kuting.
4. Saytni ochib, sahifani MAJBURIY yangilang (reload), keyin sinang.

Nimalar bor:
  index.html                    ilova
  app.js                        ilova kodi  -> /api/ask ga murojaat qiladi
  netlify/functions/ask.js      proksi — kalitni yashiradi, Gemini'ga uzatadi
  netlify/functions/package.json  ESM belgisi
  netlify.toml                  sozlamalar (/api/ask -> funksiya)
  manifest.webmanifest          "Bosh ekranga qo'shish"
  sw.js                         kesh (v2)
  icon-192.png / icon-512.png   belgi
