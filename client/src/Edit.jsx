import { useRef } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(){ 
    const navigate= useNavigate()
     const {id}= useParams()
      const editRef = useRef("")
      
      function goBack(){
        navigate('/')
      }
      async function editTodo(){

        const newItem= editRef.current.value

        if(!newItem){
            alert("enter something")
            return;
        }

        const result= await axios.put(`${import.meta.env.VITE_APP_HOST}/todos/${id}`,{
            title:newItem
        })

        alert(result.data.message)
        navigate('/')

      }
    
    return (<div className="bg-black/90 flex-col justify-center items-center w-full min-h-screen pt-10 pb-20 px-20">
        <div className="font-bold text-center text-4xl mb-10 text-white">EDIT</div>
        <div className="flex justify-center gap-2 items-center">
          <InputBox placeholder={"enter new todo"} ref={editRef} />
          <Button additionalClasses={"bg-red-500"} title={"EDIT"} onclick={editTodo} />
          <Button title={"GO BACK"} onclick={goBack} />
        </div>
      </div>)
}