import { Paragraph } from "../typography/Typography";
import React from "react";

type IContacProps = {
  id: string;
  titel: string;
  contact: string;
  svgIcone: React.ElementType;
  className?:string;
  paragraphStyle?:string;
};

function ContactsList({ ...props }: IContacProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center md:text-start md:items-start md:justify-start gap-1 ${props.className}`}
      key={props.id}
    >
      <props.svgIcone className="text-cream w-[26px] h-[26px]" />
      <Paragraph
        text={props.titel}
        className="font-semibold lg:text-[20px] lg:leading-5 mt-0 mb-0 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0"
      />
      {props.id === "mail" ? (
        <a
          href={`mailto:${props.contact}`}
          className="text-base-mobile text-cream text-wrap lg:leading-8 mt-0 mb-0 font-light text-sm lg:text-[16px] lg:mt-0 lg:mb-0"
        >
          {props.contact}
        </a>
      ) : null}
      {props.id === "phone" ? (
        <a
          href={`tel:${props.contact}`}
          className="text-base-mobile text-cream text-wrap lg:leading-8 mt-0 mb-0 font-light text-sm lg:text-[16px] lg:mt-0 lg:mb-0"
        >
          {props.contact}
        </a>
      ) : null}
      {props.id !== "mail" && props.id !== "phone" ? (
        <Paragraph
          text={props.contact}
          className={`font-light text-sm lg:!text-[16px] mt-0 mb-0 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 max-w-32 ${props.paragraphStyle}`}
        />
      ) : null}
    </div>
  );
}

export default ContactsList;
