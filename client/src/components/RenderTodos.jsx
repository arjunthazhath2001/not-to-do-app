import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
export default function RenderTodos({todolist}){
    
    const [isEdit, setIsEdti]= useState(false)
    function editTodo(){
        
        alert("editing")
    }
    return <div className="grid grid-cols-8 mx-auto mt-10">
        {todolist.map((todo,index)=>(
            
            <div key={index} className="text-white transition-all hover:scale-105 duration-150 col-span-2 text-xl p-3 text-center flex justify-between items-center font-bold w-[300px] h-[40px] cursor-pointer rounded-md bg-violet-600 mt-2">{todo.title}<FaPencilAlt className="cursor-pointer" onClick={editTodo}/></div>
            
            
        ))}
    </div>
}