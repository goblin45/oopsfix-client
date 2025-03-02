import PageContainer from "../components/layout/PageContainer";
import EditorComp from "../components/editor/EditorComp";

// hook imports 
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OutputAndHint from "../components/editor/OutputAndHint";
import Loader from "../components/layout/Loader";

export default function Editor() {
    const [hint, setHint] = useState("");
    const [output, setOutput] = useState("");
    const [searchParams] = useSearchParams();
    const ruin = searchParams.get("ruin");
    const generate = searchParams.get("generate");

    const location = useLocation();

    const [code, setCode] = useState(location.state?.code || "");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (generate) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [generate])

    if (loading) {
        return <PageContainer><Loader /></PageContainer>
    }

    return (
        <PageContainer>
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-900">
                <div className="w-full h-full flex flex-col items-center justify-between gap-4">
                    <EditorComp code={code} setCode={setCode} />
                    <div className="w-full flex justify-end items-center ">
                        <button  className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer">Run</button>
                    </div>
                </div>
                <OutputAndHint output={output} hint={hint} />
            </section>
        </PageContainer>
    )
}
