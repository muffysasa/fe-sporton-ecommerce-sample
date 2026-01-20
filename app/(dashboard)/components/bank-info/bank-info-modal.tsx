import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const BankInfoModal = ({isOpen, onClose}: TCategoryModalProps) =>{
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <div className="flex flex-col gap-6 ">
                <div className="flex gap-7">
                <div className="flex flex-col gap-4 w-full">
                <div className="input-group-admin">
                    <label htmlFor="name">Bank Name</label>
                    <input type="text" 
                    id="bankName" 
                    name="bankName" 
                    placeholder="e. g. BRA BRI BSA" />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="name">Account Number</label>
                    <input type="text" 
                    id="accountNumber" 
                    name="accountNumber" 
                    placeholder="00000000000000000" />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="name">Account Holder/Name</label>
                    <input type="text" 
                    id="accountName" 
                    name="accountName" 
                    placeholder="holder name registered to this account" />
                </div>
                </div>
                </div>
                <Button className="rounded-xl ml-auto mt-8">Add Bank Account</Button>
            </div>
        </Modal>
    )
}

export default BankInfoModal;