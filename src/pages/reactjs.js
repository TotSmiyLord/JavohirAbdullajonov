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
        </div>
      </div>
    </div>
  );
}
