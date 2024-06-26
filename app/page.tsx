import Experiencie from "@/components/Experiencie";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {navItems} from "@/data/index";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects/>
        <Experiencie/>
        <Footer/>
      </div>
    </main>
  );
}
