"use client";
import { CustomerInfo } from "@/app/hooks/use-cart-store";
import CardWithHeader from "../ui/card-with-header";
import { useState } from "react";


type TOrderInformation = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

const OrderInformation = ({formData, setFormData}: TOrderInformation) =>{
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > )=>{
    setFormData({...formData, [e.target.name]: e.target.value})}

    return (
        <CardWithHeader title = "Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="customerName">Full Name</label>
                    <input 
                    type="text" 
                    placeholder="type your name" 
                    id="customerName" 
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}/></div>
            </div>
            <div className="p-5">
                <div className="input-group">
                    
                    <label htmlFor="customerContact">WhatsApp</label>
                    <input 
                    type="text" 
                    placeholder="type your whatsapp number" 
                    id="customerContact"
                    name="customerContact"
                    value={formData.customerContact?? ""}
                    onChange={handleInputChange}/></div>
            </div>
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="customerAddress">Shipping Address</label>
                    <textarea 
                    placeholder="type your whatsapp number" 
                    id="customerAddress"
                    name="customerAddress"
                    rows={7}
                    value={formData.customerAddress}
                    onChange={handleInputChange}/>
                    </div>
            </div>
        </CardWithHeader>
    );
};

export default OrderInformation;
