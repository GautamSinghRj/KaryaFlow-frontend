import { SendHorizontal } from 'lucide-react';
import {useEffect} from "react";
import {disconnect, startConnection} from "@/config/websocket-config.js";
export default function Chat(){
    useEffect(
        ()=>{
        startConnection()//runs when the component mounts(visit/on)
        return ()=>{
            disconnect()//runs when the component unmounts
        }
        },[])
    return(
     <>
         <div className="container mx-auto bg-white text-black rounded-full p-3 border ">
             <SendHorizontal />
         </div>
     </>
    );
}