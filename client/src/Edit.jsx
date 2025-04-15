import { useRef } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import axios from "axios";

export default function Edit(){
      const editRef = useRef("")
      const URL = `${import.meta.env.VITE_APP_HOST}/todos`

      async function editTodo(){

        const result= axios.put()



      }
    
    return (<div className="bg-black/90 flex-col justify-center items-center w-full min-h-screen pt-10 pb-20 px-20">
        <div className="font-bold text-center text-4xl mb-10 text-white">EDIT</div>
        <div className="flex justify-center gap-2 items-center">
          <InputBox placeholder={"enter new todo"} ref={editRef} />
          <Button title={"EDIT"} onclick={editTodo} />
        </div>
      </div>)
}