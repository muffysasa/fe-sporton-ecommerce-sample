"use client"
import { GiConfirmed } from "react-icons/gi";
import { FiRefreshCw } from "react-icons/fi";
import Button from "../ui/button";

const OrderConfirmed= () => {
const reloadOrderStatus = () => {
    window.location.reload();
};
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto text-center">
            <GiConfirmed size={120}  className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Order Confirmed ^^</h2>
            <p className="text-center mb-8">We have received your payment, 
                and your order is currently processed by our staff, 
                just wait until your favorite sportswear arrive in your home. 
                We will contact you in Whatsapp for further shipping updates.</p>
                       
        </div>
    )
}
export default OrderConfirmed;




