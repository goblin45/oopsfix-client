import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <div className="w-full h-20 bg-gray-900 shadow-md px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">OopsFix</a>
                <a href="/editor" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-300">
                    To Code
                </a>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout