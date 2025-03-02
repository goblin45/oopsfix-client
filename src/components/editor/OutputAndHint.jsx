export default function OutputAndHint({ output, hint }) {
    return (
    <div className="w-full h-[500px] grid grid-cols-1 gap-4">
        <div className="w-full flex-1 flex flex-col items-center justify-center bg-gray-800">
            <h2 className="w-full text-xl font-bold text-white  text-left font-semibold p-4">Output</h2>
            <textarea 
                className="w-full h-full text-white bg-gray-800 border-t-2 border-gray-700  p-4" 
                readOnly
                value={output}
            />
        </div>
        <div className="w-full flex-1 flex flex-col items-center justify-center bg-gray-800">
            <h2 className="w-full text-xl font-bold text-left text-white font-semibold p-4">Hint</h2>
            <textarea 
                className="w-full h-full bg-gray-800 text-white p-4 border-t-2 border-gray-700" 
                readOnly 
                value={hint}
            />
        </div>
        
    </div>    )
}
