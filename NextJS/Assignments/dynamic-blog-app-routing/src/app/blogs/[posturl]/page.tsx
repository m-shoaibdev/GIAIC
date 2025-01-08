import Image from "next/image";
import { blogsData } from "../page";
import AddComment from "@/components/addcomment";
import SidePostCard from "@/components/sidebarpostcard";

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
        <div className="md:container md:mx-auto px-3.5 my-8 flex gap-8 md:flex-row flex-col">
            <div className="card bg-base-100 shadow-xl flex-1 self-start">
                <figure>
                    <Image src={getPostData()?.img || "/default-image.jpg"} alt={getPostData()?.title || "Default Title"} width={1000} height={500} />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-between">
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>{getPostData()?.date}</div>
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>
{getPostData()?.category}</div>
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>{getPostData()?.comments.length}</div>
                    </div>
                    <h2 className="card-title">{getPostData()?.title}</h2>
                    <p>{getPostData()?.content}</p>
                    <div className="card-actions justify-start mt-6">

                        <div className="flex gap-3">
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-xl">
                                <Image src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Author Avatar" width={100} height={100} />
                            </div>
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

            <div className="w-full md:w-[300px] lg:w-[400px] p-4">
                {  blogsData.filter((post) => post.category === getPostData()?.category)
                            .filter((post) => post.id !== getPostData()?.id)
                            .length > 0 ? 
                            <h2 className="text-xl uppercase my-2">Related Posts</h2> : null
                            }
                
                <div className="grid grid-cols-1 gap-4">
                    {
                        blogsData.filter((post) => post.category === getPostData()?.category)
                            .filter((post) => post.id !== getPostData()?.id)
                            .map((post) => (
                                <SidePostCard key={post.id} post={post} />
                            ))
                    }
                </div>
                <h2 className="text-xl uppercase my-3">Recent Posts</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        blogsData.filter((post) => post.id !== getPostData()?.id).slice(0, 3).map((post) => (
                            <SidePostCard key={post.id} post={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}