import SockJS from "sockjs-client"
import { Client } from "@stomp/stompjs"

let stompClient=null;
let subscribers=[];

export function startConnection(){
    if (stompClient && stompClient.connected) {
        console.log("Already connected")
        return
    }
    const socket= new SockJS("http://localhost:8080/ws-chat")
    stompClient=new Client({
        webSocketFactory:()=>socket,
        reconnectDelay:5000,
    });
    stompClient.onConnect=()=>{
        console.log("Connected with websocket server");
        stompClient.subscribe("/chatroom/messages",(message)=>{
            const chatMessage=JSON.parse(message.body);
            subscribers.forEach((cb)=>cb(chatMessage));
        });
    }
    stompClient.onStompError=(frame)=>{
        console.log(frame);
    }
    stompClient.activate();
}

export function sendMessage(content,file,username){
    if(stompClient!=null && stompClient.connected){
        stompClient.publish({
            destination:"/app/chat",
            body:JSON.stringify({content,file,username})
        });
    }
    else{
        console.warn("Failed to send message,STOMP client not connected")
    }
}

export function disconnect(){
    if(stompClient!=null){
        stompClient.deactivate();
        console.log("Disconnect");
    }
}

export function subscribe(callback){
    subscribers.push(callback);
    return ()=>{
        subscribers=subscribers.filter((cb)=>cb!==callback);
    }
}