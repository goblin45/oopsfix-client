import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const EditorComp = ({ code, setCode }) => {

    const onChange = (newValue) => {
        setCode(newValue);
    };

    const options = {
        selectOnLineNumbers: true,
        automaticLayout: true,
    };

    return (
        <div className="h-[500px] w-full rounded-2xl overflow-hidden">
            <Editor 
                height="500px" 
                defaultLanguage="javascript" 
                defaultValue={code || "console.log('Hello, world!');"} 
                theme="vs-dark" 
                onChange={onChange}
                options={options}
            />
        </div>
    );
};

export default EditorComp;
