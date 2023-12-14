import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="px-4 py-5">
      <div className="max-w-screen-lg m-auto flex-col flex gap-5 md:gap-10">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}