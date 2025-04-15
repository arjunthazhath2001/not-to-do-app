import { useEffect, useRef, useState } from "react"
import Button from "./components/Button"
import InputBox from "./components/InputBox"
import axios from 'axios'
import RenderTodos from "./components/RenderTodos";

function Home() {
  
  const URL = `${import.meta.env.VITE_APP_HOST}/todos`
  const [mytodos, setMyTodos] = useState([]);

  const inputRef = useRef("")



  async function getTodo(){
    const result = await axios.get(URL)
    setMyTodos(result.data.todos)
  }


  useEffect(() => {
    getTodo()
  }, [mytodos])

  
  function handleKeyDown(e){
    if(e.key=="Enter"){
      addTodo()
    }
  }


  async function addTodo() {
    const todoItem = inputRef.current.value
    if (!todoItem) {
      alert("enter something");
      return;
    }
    const response = await axios.post(URL, {
      title: todoItem
    })
    inputRef.current.value=""
    alert(response.data)


  }

  return (<div className="bg-black/90 flex-col justify-center items-center w-full min-h-screen pt-10 pb-20 px-20">
    <div className="font-bold text-center text-4xl mb-10 text-white">NOT TODO APP</div>
    <div className="flex justify-center gap-2 items-center">
      <InputBox placeholder={"enter not todo"} ref={inputRef} onKeyDown={(e)=>handleKeyDown(e)}/>
      <Button title={"ADD"} onclick={addTodo} />
    </div>
    <RenderTodos todolist={mytodos} />
  </div>)
}

export default Home
