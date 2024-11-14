"use client"
export default function Error() {
    return <div className="text-center p-5 my-10">
        <h1 className="text-3xl md:text-5xl font-bold  text-red-500">Error Page</h1>
    <p className="text-lg my-5">Something went wrong this is error.tsx page</p>
    <a href="/" className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded">Home</a>
    </div>;
}