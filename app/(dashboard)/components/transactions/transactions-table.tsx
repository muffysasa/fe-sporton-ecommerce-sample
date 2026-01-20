import PriceFormatter from "@/app/utils/price-formatter"
import Image from "next/image"
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi"

const transactionData = [
    {
        date: "23/02/2026 19:32",
        customer: "savannah glora",
        contact : "+90888272666",
        total: 300000,
        status: "pending",        
    },
    {
        date: "23/02/2026 19:32",
        customer: "bilal rabbah",
        contact : "+90888272666",
        total: 300000,
        status: "rejected",         
    },
    {
        date: "23/02/2026 19:32",
        customer: "fannyta hilma",
        contact : "+90888272666",
        total: 300000,
        status: "paid",         
    }
]

type TCategoryTableProps = {
    onViewDetails: () => void;
}



const TransactionsTable = ({onViewDetails}: TCategoryTableProps) => {
    
    const getStatusColor= (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-200 text-yellow-600";
            case "rejected":
                return "bg-red-200 text-red-600";
            case "paid":
                return "bg-green-200 text-green-600"

        }
    }


    return (
        <div className="bg-white rouded-2xl border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact </th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="">{
                transactionData.map((data, index) =>(
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">

                        <td className="px-4 py-4 font-medium">{data.date}</td>
                        <td className="px-4 py-4 font-medium">{data.customer}</td>
                        <td className="px-4 py-4 font-medium">{data.contact}</td>
                        <td className="px-4 py-4 font-medium">{PriceFormatter(data.total)}</td>
                        <td className="px-4 py-4 font-medium ">
                            <div className={`px-2 py-1 rounded-full text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}>{data.status}</div>
                        </td>
                        <td className="px-6 py-8 flex items-center gap-3 text-gray-600 ">
                            <button 
                            onClick={onViewDetails}
                            className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 w-fit py-1 px-2 rounded-full ">
                                <FiEye size={20}/>View Detais
                            </button>
                        </td>
                    </tr>
                ) )                               
                }</tbody>
            </table>
        </div>
    )
}

export default TransactionsTable