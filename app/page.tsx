import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
// import { BentoGridDemo } from "@/components/BentoGridDemo";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center 
    justify-center min-h-screen text-white overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <Grid />
        {/* <BentoGridDemo/> */}
      </div>
    </main>
  );
}
