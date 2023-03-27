import React from 'react'
import Dashboard from "@/layauts/Dashboard";


export default function javascrip() {
  return (
    <div>
      <Dashboard />

      <div class="md:ml-[135px]  mt-20">
        <div class="container m-auto px-8  text-gray-500 md:px-12 ">
          <h2 class="mb-8 text-4xl text-[#7127BA] font-bold w-full">
            JavaScript - bu nima?
          </h2>
          <h3 class="mb-4 text-3x3 text-white  font-bold w-full">
            JavaScript (JS)-bu asosan veb-ishlab chiqishda ishlatiladigan skript
            dasturlash tili. Bu tashrif buyuruvchining veb-sahifa bilan o'zaro
            aloqasini yaxshilaydi, uni sodda, tushunarli va chiroyli qiladi.
            Ko'pgina veb-ustalarning klassik tuzilishi HTML, CSS va
            JavaScript-ni o'z ichiga oladi. HTML sayt tuzilishi uchun, CSS
            vizual tomoni uchun, JS esa skriptlar, animatsiyalar va veb —
            sahifani "jonlantirish" uchun javobgardir. Ushbu tildan
            foydalanmasdan, sayt albatta ishlaydi, lekin u JavaScript-ni
            qo'llaganlarga yutqazadi.
          </h3>
          <span class="mb-4 text-3x3 text-white  font-bold w-full">
            <p>
              Ismning o'zi darhol paydo bo'lmadi. Birinchi ism "Mocha" edi, ammo
              tezda tark etildi. Keyin u "LiveScript" deb nomlandi, ammo u ham
              uzoq vaqt qolmadi. O'sha paytda Java dasturlash tili mashhur
              bo'lganligi sababli, ular e'tiborni jalb qilish uchun nomda ushbu
              nomni aks ettirishga qaror qilishdi. Ammo Java va JavaScript-ning
              umumiy jihatlari kam: ularni faqat shunga o'xshash sintaksis
              bog'laydi, chunki ikkalasi ham C va C++tillari ta'sirida bo'lgan.
            </p>
            <h1>JS ozi bilan nimani taqdim qiladi</h1>
            <p>
              JS veb-ishlab chiqishda ishlatiladi, ehtimol bu frontend uchun
              yagona va ajralmas tildir. Ammo tilning imkoniyatlari shu bilan
              tugamaydi.
            </p>
            <p>
              Frontenddan tashqari, u Node tufayli backend sifatida
              ishlatiladi.js. Sprinthost-da siz faqat Node veb-serverini
              o'rnatishingiz mumkin.bunday saytni ishga tushirish uchun js.
            </p>
            <p>
              Bundan tashqari, JavaScript mobil ishlab chiqish, mashinani
              o'rganish, ma'lumotlar bazalari bilan ishlash va hatto
              robototexnikada qo'llaniladi.
            </p>
            <p>
              Mobil ishlab chiqishda, albatta, Java, Kotlin, Swift ustunlik
              qiladi, ammo JS-da siz ham iOS, ham Android uchun dastur
              yaratishingiz mumkin. Mobil rivojlanish uchun JS-ning asosiy
              afzalligi-bu o'zaro faoliyat platforma. Ushbu maqsadlar uchun
              JS-da React Native, Angular, Phone Gap kabi bir nechta vositalar
              va ramkalar mavjud.
            </p>
            <p>
              Mashinani o'rganish JavaScript uchun yangi yo'nalishdir. Uning ham
              o'z rahbarlari bor — Python va Java. Hozircha JS-dagi barcha
              ishlanmalar faqat beta-versiyada, lekin kelajakda undan nimadir
              o'sishi mumkin.
            </p>
            <p>
              Ma'lumotlar bazalari bilan hamma narsa JS uchun ham yangi, hozir
              eng mashhur
            </p>
            <p>
              uni ishlatish uchun echim Mongoose ORM bilan bog'langan MongoDB
              ma'lumotlar bazasi. Ammo yana bir bor, kelajakda hapi ramkasi kabi
              bir nechta noaniq ishlanmalar mavjud.js.
            </p>
            <p>
              Robototexnikada JS juda ko'p Ramga ega bo'lmagan kvadrokopterlarda
              foydalanishni topdi, shuning uchun siz engil dasturlardan
              foydalanishingiz kerak. Siz ularni JS-ga yozishingiz mumkin.
            </p>
            <p>
              Ammo JavaScript — ning klassik qo'llanilishiga qaytish-veb-ishlab
              chiqish.
            </p>
            <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
              JS san'at turi sifatida
            </h1>
            <p>
              JavaScript dastlab HTML belgisi ichida skript tili sifatida ishlab
              chiqilgan. Undan oldin Microsoft-da til yaratishga urinishlar
              bo'lgan, ammo ular JS poygasida mag'lub bo'lishgan.
            </p>
            <p>
              Kodning o'zi, xuddi CSS kabi, HTML markirovkasiga kiritilgan.
              Buning uchun &lt;script&gt; va &lt;/script&gt; teglaridan
              foydalaniladi. Ushbu teglar brauzerga JS qaerdan boshlanishini
              tushunishga imkon beradi va ishlab chiquvchi navigatsiya qilish
              uchun qulayroqdir. Konteynerlarning o'zi &lt;script&gt; cheksiz
              bo'lishi mumkin.
            </p>
            <p>
              Kodni HTML bilan bir xil faylda yozish mumkin, ammo deyarli hech
              kim buni qilmaydi, chunki kod hajmi keskin o'sib boradi, bu esa
              uni o'qishni bir necha bor qiyinlashtiradi. Ko'pincha JS alohida
              faylda yoziladi va HTML unga yo'lni ko'rsatadi. Siz yo'lni
              istalgan joyda belgilashingiz mumkin, ammo uni head-da ro'yxatdan
              o'tkazish odatiy holdir.
            </p>
            <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
              Skriptli faylga havola bilan kod qanday ko'rinadi:
            </h1>
            <ul>
              <li>&lt;!DOCTYPE html&gt;</li>
              <li>&lt;html lang="en"&gt;</li>
              <li>&lt;head&gt;</li>
              <li>&lt;meta charset="UTF-8"&gt;</li>
              <li>&lt;title&gt;Example&lt;/title&gt;</li>
              <li>&lt;/head&gt;</li>
              <li>&lt;body&gt;</li>
              <li>&lt;script src="script.js"&gt;</li>
              <li>&lt;/script&gt;</li>
              <li>&lt;/body&gt;</li>
              <li>&lt;/html&gt;</li>
            </ul>
            <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
              Kodning o'zi plagin faylida qanday ko'rinishga ega:
            </h1>
            <p>alert( 'Hello, world!' );</p>
            <p>Ushbu buyruq brauzerda " Salom, dunyo!».</p>
            <h1 class="mb-4 text-3xl text-[#7127BA]  font-bold w-full">
              Tilning mashhurligi
            </h1>
            <p>
              JavaScript juda mashhur til bo'lib, u butun dunyoda qo'llaniladi,
              ammo u etakchidan uzoqdir.
            </p>
            <p>
              Veb-resurslardagi havolalar soni bo'yicha hisoblangan TIOBE
              statistik ma'lumotlariga ko'ra, JS 2021-yil oxirida 7-o'rinni
              egallaydi. Github — dan PyPL ma'lumotlariga ko'ra-3-o'rin.
              StackOverflow jsni eng mashhur til deb atagan foydalanuvchilar
              o'rtasida so'rov o'tkazdi. Xuddi shu narsani JetBrains
              mutaxassislari ta'kidladilar. Bo'sh ish o'rinlari soni bo'yicha
              hh.ru JS ham etakchi o'rinlarda.
            </p>
            <p>
              Yuqorida ta'kidlab o'tilganidek, veb-ishlab chiqish JavaScript-ni
              to'liq bajarmaydi, shuning uchun u eng yuqori pog'onada yuqori
              o'rinlarni egallaydi va kompaniyalar ushbu tilni biladigan
              xodimlarni qidirmoqdalar. Sprinthost saytlar va veb-loyihalar
              uchun serverlarni taqdim etganligi sababli, hech qanday
              joylashtirilgan resurs JavaScript-dan foydalanmasdan to'liq
              bo'lmaydi. Biz ushbu tildan foydalanishni mashq qilishimiz va
              yuqori darajadagi mutaxassis bo'lishimiz mumkin.
            </p>
          </span>
          <h1>Namunaviy loyiha</h1>
          <a href="https://java-skript.vercel.app/"><button>Tashrif Buyurish</button></a>
          <iframe
            className="lg:w-[700px] lg:h-[500px] lg:ml-80"
            src="https://www.youtube.com/embed/Kh6PfBhuLT8"
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

