"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/categories/category-table";
import CategoryModal from "../../components/categories/category-modal";
import { useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleCloseModal = () => {
        setIsOpen(false)
    }
        return (
        <div>
        <div className="flex justify-between items-center mb-10">
            <div>
            <h1 className="font-bold text-2xl">Bank Information</h1>
            <p className="opacity-50 ">Manage destination accounts for customer transfers</p>
            </div>
            <Button className="rounded-2xl" onClick={() => setIsOpen(true)}><FiPlus size={25}/>Add Bank Account</Button>
        </div>
        <BankInfoList />
        <BankInfoModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default BankInfoManagement;