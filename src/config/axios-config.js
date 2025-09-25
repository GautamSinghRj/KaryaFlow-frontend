import axios from "axios";

const apiClient= axios.create({
baseURL:"http://localhost:8080",
headers:{
    "Content-Type":"application/json"
},
timeout:10000,
})

export function register(data)
{
   return apiClient.post("/auth/addNewUser",data);
}

export function login(data)
{
   return apiClient.post("/auth/validateUser",data);
}

export function logout(token)
{
   return apiClient.post("/auth/logOut",{},{
       headers:{
           Authorization: `Bearer ${token}`,
       }
   });
}

export function createProject(data,token)
{
    return apiClient.post("/api/project/createProject",data,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function listProject(token)
{
    return apiClient.get("/api/project/listProjects",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function updateProject(data,token)
{
    return apiClient.patch("/api/project/updateProject",data,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function deleteProject(token)
{
    return apiClient.delete("/api/project/deleteProject",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function createTask(data,token)
{
    return apiClient.post("/api/task/createTask",data,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function listTasks(token)
{
    return apiClient.get("/api/task/listTasks",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function updateTask(data,token)
{
    return apiClient.patch("/api/task/updateTask",data,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function deleteTask(token)
{
    return apiClient.delete("/api/task/deleteTask",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export function listMessages(token)
{
    return apiClient.get("/api/messages/listMessages",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}