/** @format */

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/images/handcup.png";
import img2 from "../../../public/images/haturi.png";
import img3 from "../../../public/images/heard.png";
export const metadata = () => {
  return {
    title: "NextRush | Portfolio",
  };
};
const portfolio = () => {
  return (
    <>
      <p className="font-bold">Chose a gallery</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
        <Link href="/portfolio/handcup">
          <div className="p-6 h-80 relative group rounded-md shadow-2xl bg-base-300">
            <Image src={img1} alt="logo-img" width={100} height={100} />
            <span className="absolute right-10 bottom-10 font-bold text-2xl group-hover:text-green-600">
              HandCup
            </span>
          </div>
        </Link>
        <Link href="/portfolio/haturi">
          <div className="p-6 h-80 relative group rounded-md shadow-2xl bg-base-300">
            <Image src={img2} alt="logo-img" width={100} height={100} />
            <span className="absolute right-10 bottom-10 font-bold text-2xl group-hover:text-green-600">
              Haturi
            </span>
          </div>
        </Link>
        <Link href="/portfolio/hammer">
          <div className="p-6 h-80 relative group rounded-md shadow-2xl bg-base-300">
            <Image src={img3} alt="logo-img" width={100} height={100} />
            <span className="absolute right-10 bottom-10 font-bold text-2xl group-hover:text-green-600">
              Hammer
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default portfolio;
