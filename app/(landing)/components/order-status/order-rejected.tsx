"use client"
import { SiAdblock } from "react-icons/si";
import { FiRefreshCw } from "react-icons/fi";
import Button from "../ui/button";

const OrderRejected= () => {
const reloadOrderStatus = () => {
    window.location.reload();
};
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto text-center">
            <SiAdblock size={120}  className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Order Rejected -,-</h2>
            <p className="text-center mb-8">My pleasure, your order is rejected because
                your payment proof is not valid.
                please submit again.</p>
                       
        </div>
    )
}
export default OrderRejected;




