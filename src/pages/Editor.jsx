import PageContainer from "../components/layout/PageContainer";
import EditorComp from "../components/editor/EditorComp";

// hook imports 
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OutputAndHint from "../components/editor/OutputAndHint";
import Loader from "../components/layout/Loader";

// constants
import { baseUrl } from "../paths/index";

// axios
import axios from "axios";

export default function Editor() {
    const [hint, setHint] = useState("");
    const [output, setOutput] = useState("");
    const [searchParams] = useSearchParams();
    const ruin = searchParams.get("ruin");
    console.log(ruin);
    const generate = searchParams.get("generate");
    const level = searchParams.get("level");

    const location = useLocation();

    const [code, setCode] = useState(location.state?.code || "");

    const [generateCodeLoading, setGenerateCodeLoading] = useState(false);
    const [editorCodeLoading, setEditorCodeLoading] = useState(false);
    const [hintAndOutputLoading, setHintAndOutputLoading] = useState(false);

    const ruinCode = async () => {
        try {
            setEditorCodeLoading(true);
            const response = await axios.post(`${baseUrl}/ruin-code`, {
                code: code,
            });
            const data = await response.data;
            setCode(data.buggyCode);
        } catch (error) {
            console.error(error);
        } finally {
            setEditorCodeLoading(false);
        }
    }

    const getHintAndOutput = async () => {
        try {
            setHintAndOutputLoading(true);
            const response = await axios.post(`${baseUrl}/review-code`, {
                code: code,
            });
            const data = await response.data;
            setHint(data.suggestions);
            setOutput(data.vmResults.output || "Error: No output");
        } catch (error) {
            console.error(error);
        } finally {
            setHintAndOutputLoading(false);
        }
    }

    const generateCode = async () => {
        try {
            setGenerateCodeLoading(true);
            const response = await axios.get(`${baseUrl}/debug-challenge/${level}`);
            const data = await response.data;
            setCode(data.code);
        } catch (error) {
            console.error(error);
        } finally {
            setGenerateCodeLoading(false);
        }
    }

    useEffect(() => {
        if (ruin) {
            ruinCode();
        }
        if (generate) {
            generateCode();
        }
    }, [ruin, generate])

    return (
        <PageContainer>
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-900 py-8">
                <div className="w-full h-full flex flex-col items-center justify-between gap-4">
                    {editorCodeLoading || generateCodeLoading ? <div className="w-full h-[500px] flex items-center justify-center"><Loader /></div> : <EditorComp code={code} setCode={setCode} />}
                    <div className="w-full flex justify-end items-center ">
                        <button onClick={getHintAndOutput} className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer">Run</button>
                    </div>
                </div>
                <OutputAndHint output={output} hint={hint} hintAndOutputLoading={hintAndOutputLoading} />
            </section>
        </PageContainer>
    )
}
