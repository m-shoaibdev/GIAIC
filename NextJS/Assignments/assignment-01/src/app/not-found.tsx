import Link from "next/link";

export default function NotFound() {
    return (
      <div className="text-center  p-5 my-10">
        <h1 className="text-3xl md:text-5xl font-bold">OOOPS ! PAGE NOT FOUND</h1>
        <p className="text-lg my-5">Sorry the page you are looking for does not exist.</p>
        <Link href="/" className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded">Home</Link >
      </div>
    );
}