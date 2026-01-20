import PriceFormatter from "@/app/utils/price-formatter"
import Image from "next/image"
import { FiEdit2, FiTrash2 } from "react-icons/fi"

const productData = [
    {
        name: "Produk SportOn 1",
        imageUrl: "/image/products/product-1.svg",
        category : "Running",
        price: 300000,
        stock: 5        
    },
    {
        name: "Produk SportOn 2",
        imageUrl: "/image/products/product-2.svg",
        category : "Running",
        price: 977000,
        stock: 5        
    },
    {
        name: "Produk SportOn 3",
        imageUrl: "/image/products/product-3.svg",
        category : "Running",
        price: 380000,
        stock: 5        
    }
]


const ProductTable = () => {
    return (
        <div className="bg-white rouded-2xl border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="">{
                productData.map((data, index) =>(
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-6 py-4 font-medium">
                        <div className="flex gap-2 items-center">
                            <div className="aspect-square bg-gray-100 rounded-md">
                            <Image 
                            src={data.imageUrl} 
                            width={52} height={52} 
                            alt={data.name} 
                            className="aspect-square object-contain"/>
                            </div>
                        <span>{data.name}</span>
                        </div>
                        </td>
                        <td className="px-6 py-4 font-medium">
                            <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                                {data.category}
                            </div>
                        </td>
                        <td className="px-6 py-4 font-medium">{PriceFormatter(data.price)}</td>
                        <td className="px-6 py-4 font-medium">{data.stock} units</td>
                        <td className="px-3 py-8 items-center flex gap-2 text-gray-600">
                            <button>
                                <FiEdit2 size={35} className="p-1.5 rounded hover:bg-primary cursor-pointer"/>
                            </button>
                            <button>
                                <FiTrash2 size={35} className="p-1.5 rounded hover:bg-primary cursor-pointer"/>
                            </button>
                        </td>
                    </tr>
                ) )                               
                }</tbody>
            </table>
        </div>
    )
}

export default ProductTable