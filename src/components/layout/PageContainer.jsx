import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className={`min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-white flex flex-col items-center justify-start`}>
        {children}
    </div>
  );
};

export default PageContainer;