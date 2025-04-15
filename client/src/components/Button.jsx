export default function Button({title,onclick}){
    return (
        <button className="px-4 py-2 transition-all duration-150 hover:scale-105 font-bold rounded-md bg-white cursor-pointer text-xl text-black" onClick={onclick}>{title}</button>
    )
}