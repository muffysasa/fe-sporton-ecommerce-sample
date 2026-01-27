"use client";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import { FiCreditCard, FiCheckCircle } from "react-icons/fi";
import PriceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import Checkout from "../../checkout/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";


const PaymentSteps = () =>{
    const {push} =useRouter();
    const {items, customerInfo, reset} =useCartStore()
    const [file,setFile] = useState<File | null>();

    const totalPrice = items.reduce((total, item) => 
        total + item.price * item.qty, 0 );
    
    const handleConfirmPayment=async()=>{
        if (!file) {
            alert("please upload your payment receipt!!");
            return;
        }

        if (!customerInfo){
            alert("customer information is missing, please return to checkout");
            push("/checkout");
            return;}

            try{
                const formData =new FormData();
                formData.append("customerName", customerInfo.customerName);
                formData.append("customerContact", customerInfo.customerContact!.toString());
                formData.append("customerAddress", customerInfo.customerAddress);
                formData.append("image", file);
                formData.append("purchasedItems", 
                    JSON.stringify(items.map((item)=>({productId:item._id, qty: item.qty})))
                )
                formData.append("totalPayment", totalPrice!.toString());

                const res = await transactionCheckout(formData);
                

                
            alert('Transaction created successfully');
            push(`/order-status/${res._id}`);
            reset();
                
                
                

            }catch(error){
                console.log(error)
            }

    }
    return (
        <CardWithHeader title = "Payment Steps">
            <ol className="list-decimal text-xs pl-5 flex flex-col gap-4 mb-6">
            <li>
            Transfer the total amount of <b>Rp. 1.035.000 </b> to your preferred bank 
            account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
            </li>
            <li>
            After completing the transfer, <b>keep the payment receipt</b> or a 
               screenshot of the transfer confirmation. This will be needed for the next step.
            </li>
            <li>
            Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> 
                button below to validate your transaction. {JSON.stringify(file)}
            </li>
            </ol>
            <FileUpload onFileSelect={setFile}></FileUpload>
        <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between font-semibold">
                <div className="text-sm">Total</div>
                <div className="text-primary text-xs">
                    {PriceFormatter(totalPrice)}
                </div>
            </div>
            <Button variant="dark" className="w-full mt-4" onClick={handleConfirmPayment}>
            <FiCheckCircle/>Upload Receipt & Confirm
            </Button>
        </div>
        </CardWithHeader>
    );
};

export default PaymentSteps;
