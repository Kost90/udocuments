type PropsTitel = {
  text: string;
  id: string;
  className?: string;
};

type PropsParagraph = Omit<PropsTitel, "id">;

export function Titel({ text, id, className = "mt-2 md:mb-2" }: PropsTitel) {
  return (
    <h1
      id={id}
      className={`text-large-mobile lg:text-large-desctope text-orange font-semibold leading-4 lg:leading-[40px] ${className}`}
    >
      {text}
    </h1>
  );
}

export function Paragraph({ text, className }: PropsParagraph) {
  return (
    <p
      className={`text-base-mobile lg:text-base-desctope text-cream text-wrap lg:leading-8 mt-4 mb-4 ${className}`}
    >
      {text}
    </p>
  );
}
