import { db } from "@/db/prisma";
import BestSellers from "./(best-sellers)/BestSellers";
import Hero from "./(hero-section)/Hero";
import About from "@/components/About";

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <div className="mt-9">
        <BestSellers />
      </div>
      <div className="mt-12">
        <About />
      </div>
    </div>
  );
}
