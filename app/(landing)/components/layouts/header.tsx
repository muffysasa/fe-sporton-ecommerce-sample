import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi"


const Header = () =>{
    return (
    <header>
    <div className="flex justify-between gap-10 container mx-auto px-40">
        <Image 
        src="/image/Logo.svg" 
        alt="sporton logo" 
        width={127} 
        height={30}/>
        
        <nav className="flex gap-44 font-medium">
            <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
            <Link href="#">Category</Link>
            <Link href="#">Explore Products</Link>

        </nav>
        <div className="flex gap-10">
        <FiSearch size={24}/>
        <div className="relative"></div>

        <FiShoppingBag size={24}/>
        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute top-3.5 right-12.5 text-[10px] text-white text-center relative" >
            3
        </div>
        </div>
        </div>
       
     </header>
    );
}

export default Header;