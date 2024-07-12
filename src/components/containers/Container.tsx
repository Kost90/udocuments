function SectionContainer({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={`w-full ${className}`}>
      <div className="container h-full">{children}</div>
    </section>
  );
}

export default SectionContainer;
