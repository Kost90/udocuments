import React, { ForwardedRef } from "react";

type PropsTitel = {
  text: string;
  id: string;
  className?: string;
};

type PropsParagraph = Omit<PropsTitel, "id">;

export const Titel = React.forwardRef<HTMLHeadingElement, PropsTitel>(
  (
    { text, id, className = "mt-1 md:mb-1" }: PropsTitel,
    ref: ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h2
        ref={ref}
        id={id}
        className={`text-large-mobile lg:text-large-desktop text-orange font-semibold leading-8 lg:leading-[40px] ${className}`}
      >
        {text}
      </h2>
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
        ref={ref}
        className={`text-base-mobile lg:text-base-desctope text-cream text-wrap lg:leading-8 ${className}`}
      >
        {text}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
