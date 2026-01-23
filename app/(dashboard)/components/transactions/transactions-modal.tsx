import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";
import { Transaction } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    transaction: Transaction| null;
    onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
}

const TransactionsModal = ({isOpen, onClose, transaction, onStatusChange}: TProductModalProps) =>{
    const [isUpdating, setIsUpdating] = useState(false);

    if (!transaction) return;

    const handleStatusUpdate = async (status: "paid" | "rejected") => {
        setIsUpdating(true);
        try{
            await onStatusChange(transaction._id, status);
        } catch(error) {
            console.error(error);
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-6">
                <div className="min-w-50">
                    <h4 className="font-semibold text-xm">Payment Proof</h4>
                    {
                        transaction.paymentProof ? (
                            <Image
                            src={getImageUrl(transaction.paymentProof)}
                            alt="payment proof"
                            width={200}
                            height={401}/>): (
                            <div className="text-center p-4">
                                <p className="text-sm">No Payment proof uploaded</p>
                            </div>
                        )
                    }
                </div>
                <div>
                <div className="w-full">
                    <h4 className="font-semibold text-xm mb-2">Order Details</h4>
                    <div className="bg-gray-100 rounded-md p-4 space-y-2">
                        <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Date</div>
                            <div className="text-right">
                                {
                                new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "2-digit",
                                minute: "2-digit"
                            })}
                            </div>
                        </div>
                        <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Customer</div>
                            <div className="text-right">{transaction.customerName}</div>
                    </div>
                    <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50">Contact</div>
                            <div className="text-right">{transaction.customerContact}</div>
                    </div>
                     <div className="flex justify-between font-medium w-full">
                            <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                            <div className="text-right ">{transaction.customerAddress}</div>
                    </div>
                    </div>
                    <h4 className="font-semibold text-xm py-3">Item Purchased</h4>
                    <div className="space-y-3">
                        {transaction.purchasedItems.map((item, index) => (
                            <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                            <div className="bg-gray-100 rounded aspect-square flex items-center text-center">
                            <Image
                            src={getImageUrl(item.productId.imageUrl)}
                            width={45} height={45} 
                            alt="product image"/>
                            <div className="text-sm font-medium">{item.productId.name}</div>
                            <div className="ml-auto font-medium text-sm">{item.qty}</div>                            
                            </div>
                            </div>
                        ))}                  
                    </div>
                    <div className="flex justify-between font-medium w-full py-3">
                            <div className="font-semibold text-xm ">Total</div>
                            <div className="text-right">{PriceFormatter(parseInt(transaction.totalPayment))}</div>                            
                    </div>
                    <div className="flex justify-end gap-5 mt-5 item-center">
                        {
                        isUpdating ? (
                            <div className="test-centeer">Updating...</div>
                        ): (<>
                        <Button 
                        className="text-primary! bg-primary-light! opacity-70 rounded-md py-3 px-5" 
                        size="small"
                        onClick={() => handleStatusUpdate("rejected")}
                        disabled={isUpdating}>
                        <FiX size={23}/>Reject</Button>
                        

                        <Button 
                        className="text-white! bg-green-500! rounded-md py-3 px-5" 
                        size="small"
                        onClick={() => handleStatusUpdate("paid")}
                        disabled={isUpdating}>
                        <FiCheck size={23}/>
                        Approve</Button></>)
                        }
                        
                    </div>                  
                    </div>                                    
                </div>
            </div>
        </Modal>
    )
}

export default TransactionsModal;