import { twMerge } from 'tailwind-merge';

export default function Button({title,onclick, additionalClasses}){
    return (
        <button className={twMerge("px-4 py-2 transition-all duration-150 hover:scale-105 font-bold rounded-md bg-white cursor-pointer text-xl text-black", additionalClasses)} onClick={onclick}>{title}</button>
    )
}