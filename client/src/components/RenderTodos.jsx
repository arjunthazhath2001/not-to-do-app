import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
export default function RenderTodos({todolist}){

    const navigate= useNavigate()
    
    function handleOnclick(id){
        navigate(`/edit/${id}`)
    }

    async function handleOnDelete(id){

        result= await axios.delete(`${import.meta.env.VITE_APP_HOST}/todos/${id}`)
        alert(result.data.message)
    }

    return <div className="grid grid-cols-8 mx-auto mt-10">
        {todolist.map((todo,index)=>(
            
            
            
            <div key={index} className="text-white transition-all hover:scale-105 duration-150 col-span-2 text-xl p-3 text-center flex justify-between items-center font-bold w-[300px] h-[40px] cursor-pointer rounded-md bg-violet-600 mt-2" >{todo.title}
            
            <div className="flex justify-center items-center gap-3">
            <FaPencilAlt className="cursor-pointer size-6" onClick={()=>handleOnclick(todo.id)}/> 
            <MdDelete className="hover:text-red-500 size-8 text-white" onClick={()=>handleOnDelete(todo.id)}/>
            </div>
            </div>
            
        ))}
    </div>
}