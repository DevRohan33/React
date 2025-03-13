import { useState } from "react";

function Counter (){
    const [count , setcount]=useState(0);
    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl">Count :{count}</h1>
            <button
            onClick={() => setcount(count+1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2"
            >
                Increment
            </button>
        </div>
    )
}
export default Counter;
