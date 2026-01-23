"use client";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { login } from "@/app/services/auth.services";

const LoginPage = () => {
    const router  = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] =useState("")
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        const token = localStorage.getItem("token")
        if (token) {
            router.push("/admin/products");
        }
    }, [router]);

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            const data = await login({email, password})

            if (data.token) {
                router.push("/admin/products")
            }
    }   catch(err: any) {
            setErrorMessage(err.message || "Something went wrong. please try again later.")
            console.error("Login error",err)
        }finally{
            setIsLoading(false)
        }

    }

    return(
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center" >
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary p-12 px-[72px]">
                <Image src = "/image/Logo-admin.svg" 
                alt="logo admin" 
                width={304} 
                height={51} 
                className="mx-auto px-4"
                />
                <p className="text-center opacity-50 text-sm mt-2 mb-5">Enter your credentials to access the dashboard</p>
                {errorMessage && (
                    <div className="px-3 py-1 bg-primary-light border primary rounded-md text-primary text-center text-sm w-full mb-2">
                    {errorMessage}
                </div>)}
                <div className="input-group-admin mb-8">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input type="email" 
                    id="email" 
                    name="email" 
                    placeholder="please input your email"
                    className="rounded-lg! "
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group-admin mb-8">
                    <label htmlFor="email" className="text-xl">Password</label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="*****************************"
                    className="rounded-lg! "
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button 
                className="w-full rounded-lg!" 
                onClick={handleLogin}>{
                    isLoading ? "Signning..." : "Sign in"
                    }
                    <FiLogIn size={20}/></Button>                        
            </div>
        </main>

    )
}

export default LoginPage;