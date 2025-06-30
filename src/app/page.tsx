import Hero from "./_components/Hero";
import BestSellers from "./_components/BestSellers";
import { db } from "@/lib/prisma";

export default async function Home() {

  return (
    <main>
    <Hero/>
    <BestSellers/>
    </main>
  );
}
