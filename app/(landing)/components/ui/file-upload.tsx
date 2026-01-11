"use client"; 
import { FiUploadCloud, FiImage, FiTrash2 } from "react-icons/fi";
import { useRef, useState } from "react";

type TFileUploadProps= {
    onFileSelect?: (file: File | null)=>void;
}

const FileUpload = ({onFileSelect}: TFileUploadProps) =>{

    const[file, setFile] = useState<File | null>(null);
    const fileInputRef =useRef<HTMLInputElement | null>(null);

    const handleFileChange = (selectedFile?: File) => {
        if (!selectedFile) return;

        setFile(selectedFile);
        onFileSelect?.(selectedFile)
    }

    const removeFile = (e : React.MouseEvent<HTMLButtonElement>) =>
    {
        e.stopPropagation();
        setFile(null);
        onFileSelect?.(null)
    }

    return (
        <div 
        onClick= {() => fileInputRef.current?.click()}
        onDragOver= {(e) => e.preventDefault()}
        onDrop= {(e) => {e.dataTransfer.files?.[0]}}
        className="flex flex-col justify-center w-full py-6 border border-dashed border-primary">
            <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef} accept="image/*" 
            onChange={(e) => handleFileChange(e.target.files?.[0])}/>

            {
                !file ?(  

            <div className="text-center">
                <FiUploadCloud className="text-primary mx-auto"/>
                <p className="text-xs">Upload Your Payment Receipt</p>
            </div>):(
            <div className="text-center">
                <FiImage className="text-primary mx-auto" size={28}/>
                <p className="text-sm text-primary">{file.name}</p>
                <p className="text-sm text-gray-400">
                    {(file.size/1024).toFixed(1)} KB
                </p>
                <button onClick={removeFile} 
                className="flex gap-2 bg-primary/50 text-white mx-auto rounded mt-4 px-2">
                    <FiTrash2 className="self-center" size={14} /> Remove
                </button>
            </div>
                
            )
        }
        </div>
    );
}
export default FileUpload;