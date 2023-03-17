import React from "react";
import Typical from "react-typical";

export default function Men() {
  return (
    <div className="">
      <strong className=" md:text-4xl text-[#7127BA]">
        <Typical
          steps={[
            "Men Full Stack dasturchiman.",
            1500,
            "I'm a Full Stack programmer",
            1500,
            "Я Full Stack разработчик",
            1500,
          ]}
          loop={Infinity}
        />
      </strong>
    </div>
  );
}
