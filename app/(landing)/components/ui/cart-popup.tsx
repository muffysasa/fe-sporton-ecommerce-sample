"use client";
import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiArrowDownRight, FiTrash2 } from "react-icons/fi";
import Button from "./button";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    id:"prod12345",
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty:1,
    imgUrl: "product-1.svg",
  },
  {
    id:"prod23456",
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty:3,
    imgUrl: "product-2.svg",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty:2,
    imgUrl: "product-3.svg",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty:2,
    imgUrl: "product-3.svg",
  },
 ];

const CartPopup = () => {
    const {push} =useRouter();

    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0 );
    const handleCheckout = ()=>{
        push("/checkout")
    }

    return ( <div className="absolute bg-white right-2 top-8 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
        <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart</div>
        {cartList.map((item, index) => (
            <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                    <Image 
                    src={`/image/products/${item.imgUrl}`}
                    width={63}
                    height={63}
                    alt={item.name}
                    className="aspect-square object-contain"
                    />
                </div>
                <div className="self-center">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="flex gap-3 font-medium text-xs">{item.qty}x</div>
                    
                    <div className="text-primary">{PriceFormatter(item.price)}</div>
                </div>
                <Button 
                size="small" 
                variant="ghost" 
                className="w-7 h-7 p-0! self-center ml-auto"> 
                <FiTrash2/>
                </Button>
            </div>
        ))}
        <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between font-semibold">
                <div className="font-semibold text-sm">Total</div>
                <div className="text-primary text-xs">{PriceFormatter(totalPrice)}</div>
            </div>
            <Button 
            variant="dark" 
            size="small" 
            className="w-full mt-4 h-12 items-center gap-2"
            onClick={handleCheckout}
            >Checkout Now <FiArrowDownRight /> 
            </Button>
        </div>
    </div>
    );
}

export default CartPopup;