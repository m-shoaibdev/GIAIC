import Image from "next/image";
import { blogsData } from "../page";
import AddComment from "@/components/addcomment";
import Link from "next/link";

interface params {
    params: Promise<{ posturl: string }>
}
export default async function SinglePost({ params }: params) {
    // console.log(params);
    const { posturl } = await params;
    console.log(posturl);
    const getPostData = () => {
        const postData = blogsData.find((post) => post.postSlug === posturl);
        // console.log(postData);
        return postData;
    }

    if (!getPostData()) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">No posts found</h1>
            </div>
        );
    }

    return (
        <div className="flex gap-8 md:flex-row flex-col">
            <div className="card bg-base-100 shadow-xl flex-1 self-start">
                <figure>
                    <Image src={getPostData()?.img || "/default-image.jpg"} alt={getPostData()?.title || "Default Title"} width={600} height={500}/>
                </figure>
                <div className="card-body">
                <div className="card-actions justify-between">
                        <div className="">Published: {getPostData()?.date}</div>
                        <div>Category: {getPostData()?.category}</div>
                        <div>Comments: {getPostData()?.comments.length}</div>
                </div>
                    <h2 className="card-title">{getPostData()?.title}</h2>
                    <p>{getPostData()?.content}</p>
                    <div className="card-actions justify-start mt-6">
                        <div className="avatar flex gap-3"> 
                        <div className="w-20 h-20 rounded-xl">
                            <Image src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Author Avatar" width={100} height={100}/>
                        </div>
                        <div className="mt-2">
                            <div className="card-title">{getPostData()?.author}</div>
                            <div className="font-semibold">Author</div>
                        </div>    
                        </div>
                    </div>
                </div>
                <AddComment />
            </div>

            <div className="w-[400px] p-4">
                <h2 className="text-xl uppercase">Related Post</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        blogsData.filter((post) => post.category === getPostData()?.category)
                        .filter((post)=> post.id !== getPostData()?.id)
                        .map((post) => (
                            <div key={post.id} className="card bg-base-100  shadow-xl">
                                <Link href={`/blogs/${post.postSlug}`}>
                                    <figure>
                                        <Image src={post.img} alt={post.title} width={500} height={300} />
                                    </figure>
                                </Link>
                                <div className="card-body">
                                    <h2 className="card-title"><Link href={`/blogs/${post.postSlug}`}>{post.title}</Link></h2>
                                    <p>{post.content}</p>
                                    <div className="card-actions justify-end"> 
                                    </div>
                                </div> 
                            </div>
                        ))
                    }
                </div>
                <h2 className="text-xl uppercase">Recent Post</h2>
<div className="grid grid-cols-1 gap-4">
{
    blogsData.filter((post)=> post.id !== getPostData()?.id).slice(0, 3).map((post) => (
        <div key={post.id} className="card bg-base-100  shadow-xl">
            
            <Link href={`/blogs/${post.postSlug}`}>
                <figure>
                    <Image src={post.img} alt={post.title} width={500} height={300} />
                </figure>
            </Link>
            <div className="card-body">
                                    <h2 className="card-title"><Link href={`/blogs/${post.postSlug}`}>{post.title}</Link></h2>
                                    <p>{post.content}</p>
                                    <div className="card-actions justify-end"> 
                                    </div>
                                </div>
        </div>
    ))
}
</div>                
            </div>
        </div>
    );
}