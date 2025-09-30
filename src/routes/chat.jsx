import { SendHorizontal,DiamondPlus  } from 'lucide-react';
import {useEffect, useState} from "react";
import {disconnect, sendMessage, startConnection, subscribe} from "@/config/websocket-config.js";
import {useSelector} from "react-redux";
import {listMessages} from "@/config/axios-config.js";
export default function Chat(){

    const[messages,setMessages]=useState([]);
    const [content,setContent]=useState("");
    const[upload,setUpload]=useState(null);
    const [preview,setPreview]=useState(null);
    const username=useSelector(state => state.username);
    const token=useSelector(state => state.token);

    useEffect(
        ()=>{
        startConnection()//runs when the component mounts(visit/on)
            listMessages(token).then((res)=>setMessages(res.data))
        const unsubscribe=subscribe((msg)=>{
            setMessages((prev)=>[...prev,msg])
        })
        return ()=>{
            unsubscribe()
            disconnect()//runs when the component unmounts
        }
        },[token]);

    const handleChatSubmit=async () => {
        let fileBase64 = null;
        if (upload) {
            fileBase64 = await toBase64(upload);
        }
        sendMessage(content,fileBase64,username);
        setContent("");
        setUpload(null);
        setPreview(null);
    }

    const toBase64=(file)=>{
        return new Promise((resolve, reject)=>{
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>resolve(reader.result.split(",")[1]);
            reader.onerror=(error)=>reject(error);
        });
    }

    const handleFileChange = (event)=>{
    const file=event.target.files[0];
    if(file){
        console.log(file);
        setUpload(file);
        setPreview(URL.createObjectURL(file));
    }
    }

    const renderPreview=()=>{
        if (!upload) return null;
        if(upload.type.startsWith("image/")){
            return(
                  <img src={preview} alt="preview" className="w-[250px] h-[200px] border rounded-lg"/>
            )
        }
        if(upload.type === "application/pdf"){
            return (
                <embed
                    src={preview}
                    type="application/pdf"
                    width="250"
                    height="200"
                    className="border rounded-lg"
                />
            )
        }
        if (upload.type.startsWith("video/")) {
            return <video src={preview} controls width="300" className="rounded-lg" />
        }
        if (upload.type.startsWith("audio/")) {
            return <audio src={preview} controls className="rounded-lg" />
        }
    }
    console.log(messages)
    return(
     <div className="flex flex-col items-end justify-center gap-3">
         <div className="mr-14">{renderPreview()}</div>
         <div className="container mx-auto bg-white text-black border rounded-full p-3 flex flex-row items-center justify-between gap-1.5">
             <textarea type="text"
                       value={content}
                    onChange={(e)=>setContent(e.target.value)}
                       rows={1}
                       placeholder="Type your message"
                    className="w-full resize-none h-auto rounded-full focus-visible:outline-none  placeholder:text-gray-300"/>
             <label className="cursor-pointer hover:text-blue-500">
                 <DiamondPlus />
                 <input
                     type="file"
                     onChange={handleFileChange}
                     className="hidden"
                 />
             </label>
             <SendHorizontal className="cursor-pointer hover:text-blue-500" onClick={handleChatSubmit} />
         </div>
     </div>
    );
}