import { useState } from "react";

function Counter ({step}){
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center space-y-3 p-4 bg-gray-100 rounded-lg shadow-lg w-80 h-64 mx-auto mt-10">
            <h1 className="text-3xl font-bold">{count}</h1>
            <div className="flex flex-col items-center space-y-3">
                <button
                onClick={()=> setCount( count+ step)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg w-24"
                >
                    Increment
                </button>
                <button
                onClick={() => setCount(count - step)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg w-24"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}export default Counter;