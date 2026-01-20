import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi"

const bankData = [
    {
        bankName: "BCA",
        accountNumber: 23234532,
        accounName: "sahara",
    },
    {
        bankName: "BRA",
        accountNumber: 23234532,
        accounName: "sahari",
    },
    {
        bankName: "BFA",
        accountNumber: 23234532,
        accounName: "saharo",
    }
]


const BankInfoList = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
        {bankData.map((data,index) => (
            <div className="bg-white rounded-lg border border-gray-200" key={index}>
            <div className="flex justify-between p-5">
                <div className="flex gap-2 items-center">
                    <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                        <FiCreditCard size={25}/>                 
                </div> 
            <div>                
                <div className="font-semibold text-left">{data.bankName}</div>
                <div className="font-semibold text-left opacity-50">Bank Transfer</div>
            </div> 
            </div>    
            <div className="text-gray-500">
                 <button>
                <FiEdit2 size={30} className="p-1.5 rounded hover:bg-primary cursor-pointer"/>
                </button>
                <button>
                <FiTrash2 size={30} className="p-1.5 rounded hover:bg-primary cursor-pointer"/>
                </button>
            </div>
            </div> 
            <div className="p-5 font-medium">
                <div className="opacity-50">Account Number</div>
                <div className="text-medium">{data.accountNumber}</div>
            </div>
                <div className="border-t border-gray-200 px-5 py-3">
                    <span className="opacity-50">Holder: </span>WADIDAW
                </div>
            </div>        
        ))}
        </div>
    )
}

export default BankInfoList