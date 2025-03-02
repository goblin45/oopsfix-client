import PageContainer from "../components/layout/PageContainer"
import EditorComp from "../components/editor/EditorComp"
import CodeGenerator from "../components/home/CodeGenerator"

// hook imports 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState("");
    const [level, setLevel] = useState("easy"); // State to hold the selected level

    return (
        <PageContainer>
            <section className="w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-4 text-gray-900 py-8">
                <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-between gap-4">
                    <EditorComp code={code} setCode={setCode} />
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full flex justify-between gap-4 sm:justify-end items-center">
                            <button onClick={() => navigate("/editor?ruin=true", { state: { code }})} className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer">Ruin It!</button>
                            <CodeGenerator />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 underline">
                        Features:
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-gray-800">Mess the code</li>
                        <li className="text-gray-800">Fix the code</li>
                        <li className="text-gray-800">Learn debugging</li>
                    </ul>
                </div>
            </section>
        </PageContainer>
    )
}

export default Home