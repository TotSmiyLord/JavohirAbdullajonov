import React from "react";
import Men from "@/layauts/Men";

export default function Tot() {
  return (
    <div>
      <div class="relative md:ml-[135px] md:mt-[50px] ">
        <div class="relative container m-auto px-8  text-gray-500 md:px-12 ">
          <h2 class="relative mb-8 text-4x2 text-white font-bold w-full">
            <Men />
            Hozirda men boshlang'ich darajali dasturchiman,
          </h2>
          <h3 class="mb-4 text-3x3 text-white  font-bold w-full">
            Men foydalanuvchi ehtiyojlari va biznes maqsadlari o'rtasida
            muvozanatni yaratadigan mazmunli va yoqimli raqamli mahsulotlar
            qilaman.
          </h3>
        </div>
      </div>
    </div>
  );
}
