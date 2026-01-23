import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Bank } from "@/app/types";
import { createBank, updateBank } from "@/app/services/bank.service";
import { toast } from "react-toastify";

type TBankModalProps = {
    isOpen: boolean;
    onClose: () => void;
    bank: Bank | null;
    onSuccess: () => void;
};

const BankInfoModal = ({isOpen, onClose, bank, onSuccess}: TBankModalProps) =>{
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<Partial<Bank>>({
        accountNumber: "",
        accountName:"",
        bankName:""
    })

    const isEditMode = !!bank;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
        const {id, value} = e.target;
        setFormData((prev) => ({...prev, [id]:value}));
    };

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        setIsSubmitting(true)
        try {
            if (isEditMode) {
                await updateBank(bank._id, formData)
            } else {
                await createBank(formData)
            }
            setFormData({
                accountName: "",
                accountNumber: "",
                bankName: "",
            });
            onSuccess?.();
            onClose?.();
            toast.success(isEditMode ? "Bank info updated successfully": "Bank info created successfully")

        }catch(error){
            console.error(
                isEditMode ? "Bank info updated successfully": "Bank info created successfully", error
            );
            toast.error(
                isEditMode ? "Failed to update bank info" : "Failed to create bank info"
            );
        }finally{
            setIsSubmitting(false)
        }
    }


    useEffect(() => {
        if (isEditMode && isOpen) {
            setFormData({
                accountName: bank.accountName,
                accountNumber: bank.accountNumber,
                bankName: bank.bankName,
            });
        } else if (isOpen) {
            setFormData({
                accountName: "",
                accountNumber: "",
                bankName: "",
            })
        }
    }, [bank, isOpen])

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
                <div className="flex gap-7">
                <div className="flex flex-col gap-4 w-full">
                <div className="input-group-admin">
                    <label htmlFor="name">Bank Name</label>
                    <input type="text" 
                    id="bankName" 
                    name="bankName" 
                    placeholder="e. g. BRA BRI BSA" 
                    value={formData.bankName}
                    onChange={handleChange}/>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="name">Account Number</label>
                    <input type="text" 
                    id="accountNumber" 
                    name="accountNumber" 
                    placeholder="00000000000000000"
                    value={formData.accountNumber}
                    onChange={handleChange} />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="name">Account Holder/Name</label>
                    <input type="text" 
                    id="accountName" 
                    name="accountName" 
                    placeholder="holder name registered to this account"
                    value={formData.accountName}
                    onChange={handleChange} />
                </div>
                </div>
                </div>
                <Button 
                className="rounded-xl ml-auto mt-8" 
                type="submit"
                onClick={handleSubmit} 
                disabled={isSubmitting}>
                    {
                    isEditMode ? "Update Bank Info" : "Create Bank Info"
                    }</Button>
            </form>
        </Modal>
    )
}

export default BankInfoModal;