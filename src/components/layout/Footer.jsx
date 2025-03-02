export default function Footer() {
    return (
        <div className="w-full h-10 bg-gray-900 shadow-lg justify-center items-center">
            <div className="flex items-center justify-center h-full">
                <p className="text-center text-white text-sm">
                    &copy; {new Date().getFullYear()} OopsFix. All rights reserved.
                </p>
            </div>
        </div>
    )
}