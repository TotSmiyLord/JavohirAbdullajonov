import React from "react";
import Dashboard from "@/layauts/Dashboard";

export default function reactjs() {
  return (
    <div>
      <Dashboard />
      <div class=" md:ml-[135px] md:mt-[80px] mt-40">
        <div class=" container m-auto px-8  text-gray-500 md:px-12 ">
          <h2 class=" mb-8 text-4xl text-[#7127BA] font-bold w-full">
            ReactJS veb-dasturchilar orasida juda mashhur vositadir. U nima?
          </h2>
          <h3 class="mb-4 text-3x3 text-white  font-bold w-full">
            ReactJS-foydalanuvchi interfeyslarini yaratish uchun Facebook
            tomonidan ishlab chiqilgan JavaScript kutubxonasi. Uning yordami
            bilan yuqori reaktiv va barqaror ishlaydigan sahifalar/veb-saytlar
            ishlab chiqilmoqda. U bilan siz an'anaviy veb-sahifalarni
            unutishingiz mumkin, bu sizni keyingi sahifaga o'tishda kechikish
            tufayli vaqtni yo'qotishga majbur qiladi. ReactJS bilan ishlab
            chiqilgan" yashin tezligida " veb-saytlar ushbu tsikldan qochadi va
            voqea sodir bo'lgan paytda bir xil sahifadagi tarkibni yangilaydi.
          </h3>
          <h3 class="mb-4 text-3x3 text-white  font-bold w-full">
            Siz aytasiz: ammo xuddi shu effektga faqat JavaScript va HTML 'agar
            kerak bo'lsa CSS' yordamida erishish mumkin. Sahifa yuklanganda, siz
            dom daraxtini JavaScript funktsiyalari bilan boshqarishingiz va
            sahifa tarkibini o'zgartirishingiz mumkin, bu esa yangi HTML
            sahifani talab qilmasdan interaktiv qiladi. Xo'sh, nima uchun React
            JS kerak?
          </h3>

          <h1 class="mb-4 text-[#7127BA] text-3xl   font-bold w-full">
            Nimaga React JS?
          </h1>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Siz haqiqatan ham asosiy JavaScript-dan foydalangan holda bitta
            sahifali interaktiv veb — sayt yaratishingiz mumkin, chunki ReactJS
            bu JavaScript va XML. Ammo sizning kod bazangiz-ular o'sib ulg'aygan
            sayin-kamroq tushuniladi va ularni qayta ishlash yoki o'zgartirish
            qiyinroq bo'ladi. Interaktiv komponentni yaratishda siz imperativ va
            doimiy takrorlanadigan yondashuvga amal qilishingiz kerak bo'ladi.
            Asosiy JavaScript-dagi elementni manipulyatsiya qilish global
            darajada amalga oshiriladi. Natijada, yangi elementlarni ishlab
            chiqishda siz ilgari yaratilganlarga ta'sir qilasiz.
          </p>
          <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
            React quyidagi sabablarga ko'ra afzalroqdir:
          </h1>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            SPA texnologiyasi 'single-page application, o'zbek tilida:" bitta
            sahifali dasturlarni ishlab chiqish"': React sizga bitta sahifali
            dastur yaratishda yordam beradi. ReactJS yordamida siz butun
            sahifaning tarkibini minimal kod bilan o'zgartirishingiz
            'boshqarishingiz/ mumkin.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Deklarativ yondashuv: React barcha sintaktik deklarativ dizayndan
            foydalanadi, bu esa qo'llab-quvvatlanadigan yuqori darajadagi kodni
            yozishga yordam beradi. Siz faqat maqsadni belgilashingiz kerak va
            React JavaScript DOM ko'rsatmalarini ular ishlatilgan vaziyatlarni
            hisobga olgan holda boshqaradi.
          </p>
          <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
            Komponent - boshqariladigan foydalanuvchi interfeysi:
          </h1>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            React komponent kontseptsiyasiga asoslangan. Komponentlar
            foydalanuvchi interfeysida qayta foydalanish mumkin bo'lgan qurilish
            bloklaridir. ReactJS yordamida siz ma'lumotlaringizni boshqaradigan
            kapsulali komponentni yaratishingiz va dom daraxtidagi
            komponentlarning boshqa holatlari va harakatlariga ta'sir qilish
            stsenariysidan qochishingiz mumkin. Bu komponent tomonidan
            boshqariladigan interfeysning faqat bitta xususiyati. Shuningdek, u
            kodni qayta ishlatishga, javobgarlikni taqsimlashga va
            taKrorlanmasliKKa yordam beradi.
          </p>
          <h1>React bilan ishlashni qanday boshlash kerak?</h1>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            React muhitini sozlash haqiqatan ham mumkin. ReactJS - dagi hamma
            narsa JavaScript.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Keling, barcha kutubxonalar bilan noldan loyihani qanday amalga
            oshirish va to'liq ReactJS dasturini ishlab chiqish haqida
            gapiraylik. Terminalingizda quyidagi buyruqni bajarishdan boshlang:
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            npx create-react-app sizning-ilova-nomi
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Belgilangan nom bilan loyiha Yaratgandan so'ng, katalogga o'ting va
            serverni ishga tushiring:
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            cd sizning-ilovangiz nomi
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">npm start</p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Ushbu buyruq sizga index-ni taqdim etadigan serverni ishga
            tushiradi.html (umumiy katalogda mavjud) localhost:3000 da:
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            npm start nafaqat ko'rish va etkazib berishni, balki jsx sintaktik
            shakar kodini (bundan keyin muhokama qilinadi) asl JavaScript-ga
            o'zgartirishni ham boshlaydi.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Loyihangizning tuzilishi shunday ko'rinishi kerak. Npm start-ni
            ishga tushirganingizda, indeks fayli birinchi bo'lib bajariladi.js.
            U identifikator elementini boshqaradi ildiz index-da.html. Bu render
            usulini chaqiradi va ma'lumotlarni App tomonidan qaytarilgan tarkib
            bilan almashtiradi.js.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            ReactDOM.render-bu React elementini yoki DOM elementini (birinchi
            parametr) maqsadli elementning bola birligi (ikkinchi parametr)
            sifatida ko'rsatish uchun chaqiriladigan usul.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            App.JS komponentni qaytaradi. Komponent-bu React elementini
            qaytaradigan maxsus funktsiya. Qaytarilgan HTML kodi jsx(JavaScript
            XML) deb nomlanadi. JSX-React uchun sintaktik
            shakar.createElement(komponent, props, ...bolalar) (hozircha
            aytaylik, React.createElement hujjatga o'xshaydi.createElement va
            document.appendChild). App faylini o'zgartirish orqali sahifa
            tarkibiga o'zgartirishlar kiritishingiz mumkin.src-da js.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Quyidagi kod bilan almashtirib, ushbu HTML kodiga o'zgartirish
            kiritishga harakat qiling va sahifadagi o'zgarishlarni ko'rish uchun
            faylni saqlang:
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            <span>
              &lt;div&gt; &lt;h1&gt; This is my first App.&lt;/h1&gt;
              &lt;/div&gt;
            </span>
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Agar siz darhol murakkab ReactJS tushunchalariga sho'ng'imasdan
            oldinga siljishni istasangiz, unda eng asosiy sozlash uchun quyidagi
            skriptlarni Index html-ga qo'shishingiz kerak.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            <span>
              &lt;script <br /> crossorigin <br />
              src="https://unpkg.com/react@16/umd/
              <br />
              react.development.js"&gt;&lt;/script&gt; &lt;script <br />
              crossorigin
              src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;
              <br />
              &lt;/script&gt;
            </span>
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Yuqoridagi kod React-dom paketlarini qo'shadi. Ular React ilovasini
            yaratish uchun zarur bo'lgan barcha modullar/xususiyatlardan
            foydalanish uchun qo'shiladi.
          </p>

          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Endi indeks yarating.jsva biz indeksning HTML tarkibini
            boshqaramiz.html.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Bu elementni yaratadi H1, React orqali ba'zi matnlar
            bilan.createElement. React.createElement hujjatlarni quyidagicha
            qabul qiladi:
          </p>
          <ul class="mb-4 text-3x3 text-white  font-bold w-full">
            <li>
              birinchi argument-bu satr sifatida berilgan element yorlig'i;
            </li>
            <li>
              ikkinchi argument bu element uchun rekvizitdir (rekvizitlar
              elementning atributlari); agar ma'lumotlar uzatish talab
              qilinmasa, atributlar (className, style yoki boshqa maxsus
              atribut) yoki null qiymatiga ega ob'ektni o'tkazishingiz mumkin;
            </li>
            <li>oxirgi argument-bu bolalar yoki matn.</li>
          </ul>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Yuqoridagi kod indeksga o'xshaydi.js. U create-react-app yordamida
            yaratiladi, bu erda jsx avval ushbu kod parchasiga kompilyatsiya
            qilinadi va loyihani ishlab chiqishda Javascript-ga aylantiriladi.
            Shuni ta'kidlash kerakki, bir nuqtada siz React-dan foydalanishni
            sezasiz.createelementkomponent daraxtini yaratishga urinayotganda
            kodni o'qishni qiyinlashtiradi. Bu erda yangi boshlanuvchilar uchun
            misol:
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            JSX-bu React-dagi maxsus sintaksisdan boshqa narsa emas (React uchun
            sintaktik shakar.createElement), bu ishlab chiquvchiga
            qo'llab-quvvatlanadigan va o'qiladigan kodni yozishda yordam beradi,
            Shuning uchun ReactJS tushunchalarini o'rganish uchun jsx-ni
            oldindan bilish shart emas, lekin undan foydalanish bo'yicha
            qandaydir kelishuv mavjud.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Shunday qilib, biz jsx bilan va bo'lmasdan birinchi asosiy
            dasturimizni yaratishni tugatdik.
          </p>
          <p class="mb-4 text-3x3 text-white  font-bold w-full">
            Eslatma: har bir komponent katta harf bilan boshlanishi kerak. Bu
            React — ga kichik harf bilan boshlanadigan elementni DOM elementi va
            katta harf bilan boshlanadigan elementni maxsus belgilangan React
            elementi sifatida qabul qilishga yordam beradi.
          </p>
          <iframe
            className="lg:w-[700px] lg:h-[500px] lg:ml-80"
            src="https://www.youtube.com/embed/-zQsW81vsxw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
