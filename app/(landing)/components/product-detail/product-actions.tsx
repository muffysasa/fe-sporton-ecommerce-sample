"use client"
import Button from "../ui/button";
import { FiChevronDown, FiArrowRight, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
    const {push} =useRouter();
    const [qty, setQty] = useState(1);

    const checkout = () => {

    }
    return (
        <div className="flex gap-10">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5"> 
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center py-3">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center py-1" onClick={() => setQty(qty+1)}> 
                    <FiChevronUp/></button>
                    <button className="cursor-pointer h-1/2 aspect-square flex justify-center py-1" onClick={() => setQty(qty>1 ? qty-1 : qty)}>
                    <FiChevronDown/></button>
                    
                </div>
            </div>
            <Button className="px-15 w-full"> 
                <FiShoppingBag size={24}/>
                Add to cart</Button>
            <Button variant="dark" className="px-20 w-full" onClick={() => push("/checkout")}>
                Check Out Now
                <FiArrowRight size={24}/>
            </Button>

        </div>
        )
}
export default ProductActions;