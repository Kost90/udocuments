import HelloSection from "@/components/HelloSection/HelloSection";
import SecondSection from "@/components/Second_section/SecondSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col absolute w-full top-0">
        <HelloSection />
        <SecondSection />
      </main>
    </>
  );
}
