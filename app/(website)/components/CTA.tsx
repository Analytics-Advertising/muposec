import Image from "next/image";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

const CTASection = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 lg:bold-40 text-blue-100">
          {" "}
          Ready to Secure Your Future?
        </h1>
        <p className="regular-16 mt-6 text-blue-100xl:max-w-[520px]">
          Join the many satisfied clients who trust Mupo Security to protect
          what matters most. Our expert team is ready to provide you with
          customized security solutions that fit your unique needs.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-100">
            18k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="">

          <div className="grid grid-cols-2">
            
            <FaLocationArrow />
            <p className="text-blue-100 my-4">
              Office 0005, Jardown 1, 377 Johannes Ramokhoase St, Pretoria, 0002
            </p>
            
          </div>

          <div className="row">
            <FaLocationArrow />
            <p className="text-blue-100 my-4">
              Ha Masahu ,Thondoni. Plot Number 1135, Limpopo Province
            </p>
          </div>

          <div className="row">
            <FaPhone />{" "}
            <p className="text-blue-100 my-4">
              (+27) 12 004 2004 or (+27) 81 894 9868
            </p>
          </div>
          <div className="row">
            <FaEnvelope />
            <p className="text-blue-100 my-4">info@muposecurity.co.za</p>
          </div>
          <div className="row">
            <FaEnvelope />
            <p className="text-blue-100 my-4">training@muposecurity.co.za</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <section className="bg-white shadow-lg rounded-lg w-full">
          <div className="py-16 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h1 className="bold-40 lg:bold-40 text-blue-100 text-center">
              {" "}
              Contact Us
            </h1>
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  First Name & Last name
                </label>
                <input
                  type="text"
                  id="names"
                  className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@muposecurity.co.za"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Phone number
                </label>
                <input
                  type="text"
                  id="email"
                  className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0791233222"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Select enquiry type
                </label>
                <select
                  id="countries"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                >
                  <option selected>Select enquiry type</option>
                  <option value="Security Services Enquiry">
                    Security Services Enquiry
                  </option>
                  <option value="PSIRA Training Enquiry">
                    PSIRA Training Enquiry
                  </option>
                  <option value="Firearm & Competency Training Enquiry">
                    Firearm & Competency Training Enquiry
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-50 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CTASection;
