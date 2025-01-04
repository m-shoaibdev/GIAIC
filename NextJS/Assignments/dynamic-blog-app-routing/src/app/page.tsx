import Hero from "@/components/herosection"
import { blogsData } from "./blogs/page";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Hero />
    
    <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{
    blogsData.slice(0, 3).map((post) => (
        <div key={post.id} className="card bg-base-100  shadow-xl">
            
            <Link href={`/blogs/${post.postSlug}`}>
                <figure>
                    <Image src={post.img} alt={post.title} width={500} height={300} />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.content}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${post.postSlug}`} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    ))
}

</div>

    </>
  );
}