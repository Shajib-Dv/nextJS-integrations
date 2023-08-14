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
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-neutral">Get Started</button>
        </div>
      </div>
    </div>
  );
}
