import {
  FOOTER_ADDRESS_INFO,
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-5 bg-blue-100">
      <div className="padding-container max-container flex pt-10 w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* <Link href="/" className="mb-10">
            <Image src="/black-logo.png" alt="logo" width={100} height={100}/>
          </Link> */}

          <div className="flex flex-wrap gap-10 text-white sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {columns.links.map((link) => (
                    <li key={link.name}>
                      <Link href="/" className="flex items-center gap-2">
                        <link.icon
                          className="h-6 w-5 text-red-50"
                          aria-hidden="true"
                        />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5 regular-14  ">
              <FooterColumn title={FOOTER_ADDRESS_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {FOOTER_ADDRESS_INFO.links.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <contact.icon
                        className="h-5 w-5 text-red-50"
                        aria-hidden="true"
                      />
                      <div>
                        <div>{contact.label}</div>
                        <div>{contact.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {FOOTER_CONTACT_INFO.links.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <contact.icon
                        className="h-5 w-5 text-red-50"
                        aria-hidden="true"
                      />
                      <div>
                        <div>{contact.label}</div>
                        <div>{contact.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              {/* <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex flex-row gap-4 text-white">
                  {SOCIALS.links.map((social, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Link
                        href={social.url}
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon
                          className="h-6 w-6 text-red-50"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn> */}
            </div>
          </div>
        </div>

        <div className="border " />
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
