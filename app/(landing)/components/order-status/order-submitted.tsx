
"use client"
import { BsFillCartCheckFill } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import Button from "../ui/button";

const OrderSubmitted= () => {
const reloadOrderStatus = () => {
    window.location.reload();
};
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto text-center">
            <BsFillCartCheckFill size={120}  className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Order Submitted!!!</h2>
            <p className="text-center mb-8">Your Order is recorded in our system, we are still confirming the payment status, 
                please wait and your order status will be updated in less than 12 hours.</p>
            <Button variant="dark" className="w-full" onClick={reloadOrderStatus}>
                <FiRefreshCw/>Refresh Order Status
            </Button>
            
        </div>
    )
}
export default OrderSubmitted;




