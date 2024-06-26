import About from "@/components/Pages/Home/About/About";
import { CallToAction } from "@/components/Pages/Home/CTA/CallToAction";
import CurrentlyLearning from "@/components/Pages/Home/CurrentlyLearning/CurrentlyLearning";
import HeroSection from "@/components/Pages/Home/Hero/HomeSection";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { lang: string };
};

export default function IndexPage({ params: { lang } }: Props) {
  unstable_setRequestLocale(lang);

  return (
    <main className="max-w-screen flex w-full flex-col gap-20">
      <section>
        <HeroSection />
      </section>

      <section className="md:px-40 h-fit ">
        <About />
      </section>

      <section className="md:px-40 w-full flex justify-start h-screen ">
        <CurrentlyLearning />
      </section>

      <section className="h-96 w-full ">
        <CallToAction />
      </section>
    </main>
  );
}
