import CodeGenerator from "../components/home/CodeGenerator";
import EditorComp from "../components/editor/EditorComp";

import PageContainer from "../components/layout/PageContainer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const Home = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    return (
        <PageContainer>
            <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between gap-4 text-gray-900 py-8">
                <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-between gap-4">
                    <EditorComp code={code} setCode={setCode} />
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full flex justify-between gap-4 sm:justify-end items-center">
                            <button
                                onClick={() => navigate("/editor?ruin=true", { state: { code } })}
                                className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer"
                            >
                                Ruin It!
                            </button>
                            <CodeGenerator />
                        </div>
                    </div>
                </div>

                {/* Beautified Right Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
                        Features
                    </h2>
                    <ul className="space-y-4">
                        {["Mess the code", "Fix the code", "Learn debugging"].map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3 text-lg text-gray-800">
                                <CheckCircle className="text-yellow-500 w-5 h-5" />
                                <span className="hover:text-yellow-600 transition">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </PageContainer>
    );
};

export default Home;