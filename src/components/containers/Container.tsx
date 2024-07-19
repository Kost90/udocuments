function SectionContainer({
  children,
  className = "",
  ariaLabelledby = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  ariaLabelledby?:string;
}>) {
  return (
    <section className={`w-full ${className}`} aria-labelledby={ariaLabelledby}>
      <div className="container h-full">{children}</div>
    </section>
  );
}

export default SectionContainer;
