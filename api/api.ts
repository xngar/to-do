import { ITask } from "@/types/task";


const baseURL = "http://localhost:3001";

export const getAllTodos = async():Promise<ITask[]>=>{

    const res = await fetch(`${baseURL}/tasks`,{cache:"no-store"});

    if(!res.ok){
        throw new Error("tenemos un error houston!!");
    }

    const todos= await res.json();
    return todos;   
}

// agrega datos

export const addTodo =async (todo:ITask) :Promise<ITask>=> {
    const res = await fetch(`${baseURL}/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(todo)
    });

    const data = await res.json();
    return data;
}