import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal = ({isOpen, onClose}: TProductModalProps) =>{
    const [imageFile, setImageFile] = useState<File | null>(null);
    const[imagePreview, setImagePreview] = useState<File | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
            <div className="flex flex-col gap-6">
                <div className="flex gap-7 ">
                <div className="min-w-[200px]">
                    <ImageUploadPreview 
                    label="product image" 
                    value={imagePreview} 
                    onChange={(file) => {
                        setImageFile(file);
                        setImagePreview(URL.createObjectURL(file));
                    }}/>
                </div>
                <div className="flex flex-col gap-4 w-full">
                <div className="input-group-admin">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" 
                    id="name" 
                    name="name" 
                    placeholder="e. g. RunningShoes" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="input-group-admin">
                    <label htmlFor="price">Product Price (IDR)</label>
                    <input type="number" 
                    id="price" 
                    name="price" 
                    placeholder="e. g. 500000" />
                </div>
                <div >
                    <div className="input-group-admin">
                    <label htmlFor="stock">Product Stock</label>
                    <input type="number" 
                    id="stock" 
                    name="stock" 
                    placeholder="e. g. 100" />
                </div>
                </div>
                </div>
                <div className="input-group-admin flex flex-col w-full">
                    <label htmlFor="category">Product Category</label>
                    <select name="category" id="category">
                        <option className="input-group-admin flex"
                        value="" disabled>Select Category
                        </option>
                        <option value="running" >Running</option>
                        <option value="football" >Football</option>
                    </select>
                </div>
                </div>
                </div>
                <div className="input-group-admin flex flex-col w-full">
                    <label htmlFor="description">Description</label>
                    <textarea className="border rounded-xl border-gray-300 px-5 py-2" name="description" id="description" rows={7} placeholder="text your description product...">
                    </textarea>
                </div>  
                <Button className="rounded-xl ml-auto mt-8">Create Product</Button>
            </div>
        </Modal>
    )
}

export default ProductModal;