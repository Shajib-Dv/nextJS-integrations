/** @format */

import Image from "next/image";
import contactImg from "../../../public/images/lawyer-2.jpg";

export const metadata = () => {
  return {
    title: "NextRush | Contacts",
  };
};

const contacts = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <Image src={contactImg} alt="banner" className="rounded-md" />
        </div>
        <div className="card flex-1 shadow-2xl ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="input input-bordered h-full"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral bg-green-700">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contacts;
