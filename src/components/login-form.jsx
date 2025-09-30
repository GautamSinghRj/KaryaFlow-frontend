import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/config/axios-config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import {creation} from "@/features/tokenSlice.js"
import {set} from "@/features/userSlice.js"

export function LoginForm({
  className,
  ...props
}) {
  const navigate=useNavigate();
  const [formData,setFormData]=useState(
    {
      email:'',
      password:'',
    }
  );
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData(prev=>({...prev,[e.target.id]:e.target.value}));
  }

  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      const response=await login(formData);
      console.log(response);
      const username=response.data.data.username;
      const token=response.data.data.token;
      dispatch(set(username))
      dispatch(creation(token));
      navigate("/dashboard");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleLogin}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required value={formData.email} onChange={handleChange}/>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required value={formData.password} onChange={handleChange}/>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>

      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
