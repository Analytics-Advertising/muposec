import {
  FOOTER_ADDRESS_INFO,
  FOOTER_CONTACT_INFO,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-5 bg-blue-100">
      <div className="padding-container max-container flex pt-10 w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <Link href="/">
              <Image src="/white-logo.png" alt="logo" width={150} height={100} />
            </Link>
            <p className="text-white">
              <b>Mupo Projex (Pty) Ltd</b> is a trusted and reputable Security & Training service provider with extensive experience within the security industry. 
            </p>
          </div>

          <div className="flex flex-wrap gap-10 text-white sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5 regular-14 flex-1">
              <FooterColumn title={FOOTER_ADDRESS_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {FOOTER_ADDRESS_INFO.links.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <contact.icon
                        className="h-5 w-5 text-red-50"
                        aria-hidden="true"
                      />
                      <div>
                        <div>{contact.label} {" : "}
                        {contact.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5 flex-1">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {FOOTER_CONTACT_INFO.links.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <contact.icon
                        className="h-5 w-5 text-red-50"
                        aria-hidden="true"
                      />
                      <div>
                        <div>{contact.label} {" : "}
                        {contact.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border p-0 m-0" />
        <p className="regular-14 w-full text-center text-white">
          2024 Mupo Security | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
