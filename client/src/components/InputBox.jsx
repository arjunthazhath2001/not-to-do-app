export default function InputBox({placeholder, ref}){
    return(
        <input ref={ref} className="border-white border-2 rounded-md px-4 py-2 text-white text-xl top-14 left-2 font-bold" placeholder={placeholder}></input>
    )
}