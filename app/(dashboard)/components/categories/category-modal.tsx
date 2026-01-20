import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal"
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const CategoryModal = ({isOpen, onClose}: TCategoryModalProps) =>{
    const [imageFile, setImageFile] = useState<File | null>(null);
    const[imagePreview, setImagePreview] = useState<string | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
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
                    <label htmlFor="name">Category Name</label>
                    <input type="text" 
                    id="text" 
                    name="categoryName" 
                    placeholder="e. g. RunningShoes" />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={7} placeholder="text your description product...">
                    </textarea>
                </div>
                </div>
                </div>
                <Button className="rounded-xl ml-auto mt-8">Create Category</Button>
            </div>
        </Modal>
    )
}

export default CategoryModal;