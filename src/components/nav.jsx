import { User } from "lucide-react"
export default function Nav() {
    return (
        <div className="container left-1/2 transform -translate-x-1/2 top-6 p-1 border bg-white rounded-full z-50 fixed flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 justify-start items-center">
                <a href="/" className="px-5 font-black text-2xl flex flex-row items-center">
                    <img src="../src/assets/logo.png" alt="Logo for Karyaflow" className="w-12 h-12 transform translate-y-0.5" />karyaflow</a>
                <a href="#features" className="transition-all duration-150 ease-in-out hover:bg-slate-900 hover:text-white rounded-full p-2 px-5">Features</a>
                <a href="#customers" className="transition-all duration-150 ease-in-out hover:bg-slate-900 hover:text-white rounded-full p-2 px-5">Customers</a>
                <a href="#pricing" className="transition-all duration-150 ease-in-out hover:bg-slate-900 hover:text-white rounded-full p-2 px-5">Pricing</a>
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
                <a href="/login"><User className="size-7" /></a>
                <a href="/contact" className="flex flex-row justify-center gap-6 items-center transform bg-pink-300 p-2 pl-4 pr-1.5 rounded-full">Connect with us
                    <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center" >
                        <img src="../src/assets/arrow-right.svg" alt="Connect with us link arrow" />
                    </div>
                </a>
            </div>
        </div>
    )
}