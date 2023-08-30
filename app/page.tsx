import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "@/components";

export default function Home() {
  return (
    <>
      <main className="relative dark:bg-gray-700">
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 py-16w w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black text-slate-300">
          <Footer />
        </section>
      </main>
    </>
  );
}
