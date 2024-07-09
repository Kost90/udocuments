import React, { ForwardedRef } from "react";

type PropsTitel = {
  text: string;
  id: string;
  className?: string;
};

type PropsParagraph = Omit<PropsTitel, "id">;

export const Titel = React.forwardRef<HTMLHeadingElement, PropsTitel>(
  (
    { text, id, className = "mt-2 md:mb-2" }: PropsTitel,
    ref: ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h1
        ref={ref}
        id={id}
        className={`text-large-mobile lg:text-large-desktop text-orange font-semibold leading-4 lg:leading-[40px] ${className}`}
      >
        {text}
      </h1>
    );
  }
);

Titel.displayName = "Titel";

export const Paragraph = React.forwardRef<HTMLParagraphElement, PropsParagraph>(
  (
    { text, className }: PropsParagraph,
    ref: ForwardedRef<HTMLParagraphElement>
  ) => {
    return (
      <p
        className={`text-base-mobile lg:text-base-desctope text-cream text-wrap lg:leading-8 mt-4 mb-4 ${className}`}
      >
        {text}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
