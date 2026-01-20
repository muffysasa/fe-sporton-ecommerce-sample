"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
    const pathname = usePathname();
    const menuItems = [
        {
        name: "Products",
        icon: FiBox,
        link: "/admin/products"
        },
        {
        name: "Categories",
        icon: FiLayers,
        link: "/admin/categories"
        },
        {
        name: "Transactions",
        icon: FiShoppingCart,
        link: "/admin/transactions"
        },
        {
        name: "Bank",
        icon: FiCreditCard,
        link: "/admin/bank-info"
        },
        

    ]



    return <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
    <div className="py-8 px-13 border-b border-gray-200 ">
        <Image src = "/image/Logo-admin.svg" alt="logo admin" width={215} height={36}>
        
        </Image>
    </div>
    <div className="flex flex-col gap-4 mt-2 p-5">
        {menuItems.map((item, index) => {
            const isActive = item.link === pathname;
            return (
            <Link 
            href={item.link} 
            key={index} 
            className={`flex gap-3 items-center py-2 px-4.5 rounded-4xl font-medium ${
                isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"}`}>
                <item.icon size={30}/>
                <span >{item.name}
                </span>
            </Link>
        );
        })}
    </div>
    <Link href="#" 
    className="flex gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-15">
    <FiLogOut size={30}/> Log Out
    </Link>
    </aside>
    

};
export default Sidebar;