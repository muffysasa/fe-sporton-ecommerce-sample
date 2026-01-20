"use client";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiLogIn } from "react-icons/fi";

const LoginPage = () => {
    const { push } = useRouter()
    return(
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center" >
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary p-12 px-[72px]">
                <Image src = "/image/Logo-admin.svg" alt="logo admin" width={304} height={51} className="mx-auto px-4"/>
                <p className="text-center opacity-50 text-sm mt-2 mb-5">Enter your credentials to access the dashboard</p>
                <div className="input-group-admin mb-8">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input type="email" 
                    id="email" 
                    name="email" 
                    placeholder="please input your email"
                    className="rounded-lg! " />
                </div>
                <div className="input-group-admin mb-8">
                    <label htmlFor="email" className="text-xl">Password</label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="*****************************"
                    className="rounded-lg! " />
                </div>
                <Button className="w-full rounded-lg!" onClick={() => push("/admin/categories")}><FiLogIn size={20}/> Sign In</Button>                        
            </div>
        </main>

    )
}

export default LoginPage;