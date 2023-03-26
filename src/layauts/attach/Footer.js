import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="xl:ml-40 hidden lg:block">
        <div className="flex ">
          <div className="absolute z-30 mt-10">
            <h1 class="mb-8 text-4xl text-[#7127BA] font-bold w-full ml-2">
              Namunaviy Loyiha
            </h1>
            <div className="bbb w-[680px] h-[165px]">
              <p className="w-[585px] h-[108px] pt-8 pl-10 text-white">
                Ushbu loixa React.js tili yordamida qilingan unga Tailvinds
                feyworki orqali stillangan va ushbu loixaning vazifaasi tezkor
                xabarlarni nashr qilishdan iborat
              </p>
            </div>
            <a href="https://on-time-seven.vercel.app/" className="">
              <button className="rounded-xl ml-20 border-2 border-[#693B93]  bg-gradient-to-br from-[#4F228D]   px-5 py-3 text-base mb-3 font-medium mt-2 text-white transition duration-200 hover:bg-[#5D3792] active:bg-red-700/5">Tashrif Buyurish</button>
            </a>
          </div>

          <div className="relative z-20">
            <div className="bg-[#2B0B3A] w-[582px] h-[341px] ml-[600px] pt-10 pl-10 rounded-xl">
              <a href="https://on-time-seven.vercel.app/">
                <div className="broo w-[540px] h-[300px] "></div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex  mt-20 ">
          <div className="relative z-20">
            <div className="bg-[#2B0B3A] w-[582px] h-[341px]  pt-10  rounded-xl">
              <a
                href="https://javohir-med.vercel.app/"
                className="w-[540px] h-[300px] z-40"
              >
                <div className="broot w-[540px] h-[300px] "></div>{" "}
              </a>
            </div>
          </div>

          <div className="absolute z-30 mt-10 pl-[500px]">
            <h1 class="mb-8 text-4xl text-[#7127BA] font-bold w-full pl-[350px]">
              Namunaviy Loyiha
            </h1>
            <div className="teskari w-[680px] h-[165px] ">
              <p className="w-[585px] h-[108px] pt-8 pl-10 text-white">
                Ushbu loixa React.js tili yordamida qilingan unga Tailvinds
                feyworki orqali stillangan va ushbu loixaning vazifaasi
                bemorlarni va oddiy aholini sogliqini saxlash uxhun faolyat
                yurutuvchi klinika sayti
              </p>
            </div>
            <a href="https://on-time-seven.vercel.app/" className="">
              <button className="rounded-xl ml-40 border-2 border-[#693B93]  bg-gradient-to-br from-[#4F228D]   px-5 py-3 text-base mb-3 font-medium mt-2 text-white transition duration-200 hover:bg-[#5D3792] active:bg-red-700/5">Tashrif Buyurish</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

