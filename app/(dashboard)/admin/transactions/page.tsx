"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionsTable from "../../components/transactions/transactions-table";
import TransactionsModal from "../../components/transactions/transactions-modal";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types";
import { getAllTransactions, updateTransaction } from "@/app/services/transaction.services";
import { toast } from "react-toastify";

const TransactionsManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [transactions, setTrasnsactions] = useState<Transaction[]>([]);

const fetchTransactions = async () => {
    try {
        const data= await getAllTransactions();
        setTrasnsactions(data)
    }   catch(error) {
        console.error("Failed to fetch transactions", error)
    }
}


    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleViewDetails = (transaction: Transaction) => {
        setIsModalOpen(true)
        setSelectedTransaction(transaction);
    };

    const handleStatusChange = async (id: string, status: "paid" | "rejected") => {
        try {
            const formData = new FormData();
            formData.append('status', status);
            await updateTransaction(id, formData);

            toast.success("Transaction status updated");
        } catch (error) {
            console.error("Failed to update transaction status", error)
            toast.error("Failed to update transaction status");
        } finally {
            setIsModalOpen(false)
        }
    };

    useEffect(() => {
        fetchTransactions();
    },[])

        return (
        <div>
        <div className="flex justify-between items-center mb-10">
            <div>
            <h1 className="font-bold text-2xl">Transactions Management</h1>
            <p className="opacity-50 ">Verify incoming payments and manage orders</p>
            </div>
            </div>
        <TransactionsTable 
        transactions={transactions} 
        onViewDetails={handleViewDetails} />
        <TransactionsModal 
        transaction={selectedTransaction}
        onStatusChange={handleStatusChange}
        isOpen={isModalOpen} 
        onClose={handleCloseModal}/>
        </div>
    )
}

export default TransactionsManagement;