import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const TransactionsModal = ({isOpen, onClose}: TProductModalProps) =>{
    const [imageFile, setImageFile] = useState<File | null>(null);
    const[imagePreview, setImagePreview] = useState<File | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-2">
                <div>
                    <h4 className="font-semibold text-xm">Payment Proof</h4>
                    <Image
                    src="/image/"
                    alt="payment proof"
                    width={200}
                    height={401}/>
                </div>
                <div>
                <div>
                    <h4 className="font-semibold text-xm mb-2">Order Details</h4>
                    <div className="bg-gray-100 rounded-md p-4 space-y-2">
                        <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Date</div>
                            <div className="text-right">23/02/2026 13:49</div>
                        </div>
                        <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Customer</div>
                            <div className="text-right">harry pottah</div>
                    </div>
                    <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Contact</div>
                            <div className="text-right">+0964328894920</div>
                    </div>
                     <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                            <div className="text-right ">hogwarts household accio street stret streeet street all in red glowup red green yolo</div>
                    </div>
                    </div>
                    <h4 className="font-semibold text-xm py-3">Item Purchased</h4>
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                        <div className="bg-gray-100 rounded aspect-square flex items-center text-center">
                            <Image
                            src="/image/products/product-1.svg"
                            width={45} height={45} 
                            alt="image"/>
                        </div>
                        <div className="text-sm font-medium">SportsOn Hyeperfast Shoes</div>
                        <div className="ml-auto font-medium text-sm">3 units</div>
                    </div>
                    <div className="flex justify-between font-medium w-full py-3">
                            <div className="font-semibold text-xm ">Total</div>
                            <div className="text-right">{PriceFormatter(3000000)}</div>                            
                    </div>
                    <div className="flex justify-end gap-5 mt-5 item-center">
                        <Button className="text-primary! bg-primary-light! opacity-70 rounded-md py-3 px-5" size="small">
                        <FiX size={23}/>Reject</Button>
                        <Button className="text-white! bg-green-500! rounded-md py-3 px-5" size="small">
                        <FiCheck size={23}/>Approve</Button>
                    </div>                  
                    </div>                                    
                </div>
            </div>
        </Modal>
    )
}

export default TransactionsModal;