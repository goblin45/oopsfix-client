import React from 'react';

const Loader = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="loader"></div>
            <style jsx>{`
                .loader {
                    border: 8px solid rgba(0, 0, 0, 0.3);
                    border-top: 8px solid #e5e7eb; /* gray-90 */
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loader;
