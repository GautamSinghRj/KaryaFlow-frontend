import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { register } from "@/config/axios-config"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {creation} from "@/features/tokenSlice.js"
import {DiamondPlus} from "lucide-react";


export function RegisterForm({
  className,
  ...props
}) {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    email:'',
    username:'',
    password:'',
    fullname:'',
    image:''
  });

  const handleChange=(e)=>{
    setFormData(prev =>({...prev,[e.target.id]:e.target.value}));
  }

    const toBase64=(image)=> {
        return new Promise((resolve, reject)=>{
            const reader=new FileReader();
            reader.readAsDataURL(image);
            reader.onload=()=>resolve(reader.result.split(',')[1]);
            reader.onerror=(error)=>reject(error)
        });
    }

    const handleImageChange=async (e) => {
        const image = e.target.files[0];
        if(image){
        const base64image= await toBase64(image);
        setFormData(prev=>({...prev,image: base64image}));}
    }

  const handleRegister=async(e)=>{
      e.preventDefault();
      try
      {
       const response = await register(formData);
       console.log(response);
       const token = response.data.data.token;
       dispatch(creation(token));
       navigate("/dashboard");
      }
      catch(error)
      {
        console.log(error)
      }
    }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleRegister}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details below to register your account
        </p>
      </div>
        <div className="grid gap-6">
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required value={formData.email}
                       onChange={handleChange}/>
            </div>
            <div className="grid gap-3">
                <div className="flex items-center">
                    <Label htmlFor="username">Username</Label>
                </div>
                <Input id="username" type="text" required value={formData.username} onChange={handleChange}/>
            </div>
            <div className="grid gap-3">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required value={formData.password} onChange={handleChange}/>
            </div>
            <div className="grid gap-3">
                <div className="flex items-center">
                    <Label htmlFor="fullname">Full Name</Label>
                </div>
                <Input id="fullname" type="text" required value={formData.fullname} onChange={handleChange}/>
            </div>
            <div className="grid gap-3">
                <div className="flex flex-row gap-2 items-center">
                    <Label htmlFor="image-upload" className="cursor-pointer flex items-center gap-2">
                        Upload your picture
                        <DiamondPlus className="cursor-pointer"/>
                    </Label>
                    <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
            </div>
            <Button type="submit" className="w-full">
                Register
            </Button>
        </div>
        <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
                Login
            </a>
        </div>
    </form>
  );
}
