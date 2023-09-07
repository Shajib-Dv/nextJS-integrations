/** @format */
import Image from "next/image";
import banner from "/public/images/question.png";
export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="flex-1">
          <Image src={banner} alt="banner" className="md:w-4/5 img-ping" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-green-600 leading-tight">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Reprehenderit, voluptates?
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            nulla explicabo aliquam perferendis officia voluptatibus aspernatur
            eius, similique a at repudiandae numquam aliquid, illum, sunt sequi
            cupiditate totam est suscipit?
          </p>
          <button className="btn btn-neutral">Get Started</button>
        </div>
      </div>
    </div>
  );
}
