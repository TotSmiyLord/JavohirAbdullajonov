import React from "react";

export default function html() {
  return (
    <div>
      <div class="md:ml-[135px] md:mt-[50px]">
        <div class="container m-auto px-8  text-gray-500 md:px-12">
          <h2 class="mb-8 text-4xl text-[#7127BA] font-bold w-full">
            HTML va CSS nima?
          </h2>
          <h3 class="mb-4 text-3x3 text-white  font-bold w-full">
            Salom. Mavzu haqida biror narsa yozish vaqti keldi. Sarlavha ushbu
            post nima haqida ekanligini aniq ko'rsatib turibdi, lekin men biroz
            aniqlik kiritmoqchiman.
          </h3>
          <span class="mb-4 text-3x3 text-white  font-bold w-full">
            <p>
              Men blogimdan til asoslari bo'yicha darslik tayyorlamayman, sinf,
              selektor, tirnoq va nuqta nima ekanligini aytmayman. Internetda
              allaqachon juda ko'p materiallar chaynalgan, men buni
              takrorlashning ma'nosi yo'q. Men o'z blogimni boshqa saytlarning
              maqolalarini o'z so'zlarim bilan qayta yozish yo'lida yuritishni
              xohlamayman (aksariyat "bloggerlar" kabi).
            </p>
            <p>
              Ammo men ishda ishlatadigan qiziqarli chiplar, fokuslar va umuman
              foydali fokuslar bilan bo'lishishdan mamnun bo'laman!
            </p>
            <h1>Mavzuga yaqinroq</h1>
            <p>Vikipediyadan ta'riflarni olaman:</p>
            <p>
              HTML (ingliz tilidan. HyperText Markup Language "gipermatnni
              belgilash tili";) jahon tarmog'idagi hujjatlarni belgilashning
              standart tili. Ko'pgina veb-sahifalar HTML tili (yoki XHTML)
              yordamida yaratilgan. HTML tili brauzerlar tomonidan talqin
              qilinadi va odamlar uchun qulay shaklda hujjat sifatida
              ko'rsatiladi.
            </p>
            <p>
              CSS (ingl. Cascading Style Sheets-kaskadli uslublar jadvallari) -
              belgilash tili yordamida yozilgan hujjatning tashqi ko'rinishini
              tavsiflashning rasmiy tili. U asosan HTML va XHTML belgilash
              tillari yordamida yozilgan veb-sahifalarni tavsiflash, tashqi
              ko'rinishini bezash vositasi sifatida ishlatiladi, ammo SVG yoki
              XUL kabi har qanday XML hujjatlariga ham qo'llanilishi mumkin.
            </p>
            <p>
              HTML va CSS nima ekanligi aniq ko'rinadi, ammo baribir o'z
              so'zlarim bilan aytaman.
            </p>
            <p>
              HTML-bu veb-sahifalar uchun qurilish materialining bir turi.
              Maxsus teglarni (brauzer uchun alohida ma'noga ega bo'lgan
              buyruqlar, so'zlar) o'qib, brauzer o'z oynasida matn, rasmlar va
              boshqa narsalar bilan sahifa quradi.
            </p>
            <p>CSS barcha go'zallikni yaratadigan qoplama materialidir.</p>
            <p>
              Taxminan aytganda, HTML-bu saytda bo'lishi kerak bo'lgan narsa va
              CSS uning qanday ko'rinishi uchun javobgardir. CSS tufayli biz
              saytlarda turli xil effektlar, animatsiyalar va boshqa
              yaxshiliklarni ko'ramiz.
            </p>
          </span>
          <iframe
            className="lg:w-[700px] lg:h-[500px] lg:ml-80"
            src="https://www.youtube.com/embed/o6cC83OnE3M"
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
