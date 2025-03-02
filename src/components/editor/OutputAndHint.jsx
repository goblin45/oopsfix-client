import Loader from "../layout/Loader";

export default function OutputAndHint({ output, hint, hintAndOutputLoading }) {
    return (
    <div className="w-full h-[500px] grid grid-cols-1 gap-4">
        <div className="w-full flex-1 flex flex-col items-center justify-center bg-gray-800 rounded-t-xl overflow-hidden">
            <h2 className="w-full text-xl font-bold text-white  text-left font-semibold p-4">Output</h2>
            {hintAndOutputLoading ? <div className="w-full h-full flex items-center justify-center"><Loader /></div> : <textarea 
                className="w-full h-full text-white bg-gray-800 border-t-2 border-gray-700  p-4 focus:outline-none" 
                readOnly
                value={output}
                resize="none"
            />
            }
        </div>
        <div className="w-full flex-1 flex flex-col items-center justify-center bg-gray-800 rounded-b-xl overflow-hidden">
            <h2 className="w-full text-xl font-bold text-left text-white font-semibold p-4">Hint</h2>
            {hintAndOutputLoading ? <div className="w-full h-full flex items-center justify-center"><Loader /></div> : 
            <div className="w-full h-full bg-gray-800 text-white p-4 border-t-2 border-gray-700 focus:outline-none">
                <ul className="list-disc pl-5 space-y-2">
                    {Array.isArray(hint) ? hint.map((h, index) => (
                        <li key={index}>{h}</li>
                    )) : hint}
                </ul>
            </div>
            }
        </div>
        
    </div>    )
}
