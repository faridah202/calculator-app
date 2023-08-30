

export default function Button ({onClick, text, value}){
    
    return(
        <div className="p-1"> 
            <button onClick={onClick} value={value}
            className="bg-white text-blue-400 w-24 h-20 p-5 font-bold text-3xl shadow-md shadow-blue-500/50 
            rounded-full">{text}</button>
            
        </div>
    )
}
 
