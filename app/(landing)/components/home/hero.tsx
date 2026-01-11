import Button from "../ui/button";
import { BiRun } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import Image from "next/image";

const HeroSection = () =>{
    return (
        <section 
        id="hero-section" 
        className="container mx-auto h-screen flex">

        <div className="relative self-center flex">
            <div className="relative self-center ml-40">
            <Image src= "image/basketball.svg" 
            width={620}
            height={620}
            alt="images basketball hero"             
            className=" grayscale absolute -left-20 top-40 -translate-y-1/2 z-[-1] pointer-events-none" />
                <div className="text-primary italic">Friday Sale Up to 55%</div>
                <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
                    WEAR YOUR <br/> TOP QUALITY  <br/> SPORTWEAR </h1>

                <p className="w-1/2 mt-10 leading-loose">
                Engineered for endurance and designed for speed. 
                Experience gear that moves as fast as you do. 
                Premium fabrics. Unmatched comfort. 
                Limitless motion. </p>
                
                <div className="flex gap-5 mt-5 italic">
                    <Button>EXPLORE MORE <BiRun size={25}/></Button>
                    <Button variant="ghost">Watch Video <RiMovie2Fill size={25}/></Button>
                </div>
            </div>
            <Image src= "/image/img-hero.png" 
            width={720}
            height={920}
            alt="images hero"             
            className="absolute -right-30 top-1/2 -translate-y-1/2" />
        </div>
        <Image src= "image/img-ornament-hero.svg" 
            width={420}
            height={420}
            alt="images elipse hero"             
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-[-1] pointer-events-none" />
        </section>
    )
}

export default HeroSection;

//className="right-55 top-75 -translate-y-1/2 relative"