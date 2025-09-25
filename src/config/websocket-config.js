import SockJS from "sockjs-client"
import { Client } from "@stomp/stompjs"

let stompClient=null;

export function startConnection(){
    const socket= new SockJS("http://localhost:8080/ws-chat")
    stompClient=new Client({
        webSocketFactory:()=>socket,
        reconnectDelay:5000,
    });
    stompClient.onConnect=()=>{
        console.log("Connected with websocket server");
        stompClient.subscribe("/chatroom/messages",(message)=>{
            const chatMessage=JSON.parse(message.body);
            console.log(chatMessage);
        });
    }
    stompClient.onStompError=(frame)=>{
        console.log(frame);
    }
    stompClient.activate();
}

export function sendMessage(content){
    if(stompClient!=null && stompClient.connected){
        stompClient.publish({
            destination:"/app/chat",
            body:JSON.stringify({content})
        });
    }
    else{
        console.warn("Failed to send message,STOMP client not connected")
    }
}

export function disconnect(){
    if(stompClient!=null){
        stompClient.deactivate();
        console.log("Disconnect")
    }
}
