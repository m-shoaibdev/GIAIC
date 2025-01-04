import Image from "next/image";
import { blogsData } from "../page";

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

    return (
        <div className="flex gap-8">
            <div className="card bg-base-100 shadow-xl flex-1">
                <figure>
                    <Image src={getPostData()?.img || "/default-image.jpg"} alt={getPostData()?.title || "Default Title"} width={600} height={500}/>
                </figure>
                <div className="card-body">
                <div className="card-actions justify-between">
                        <div className="">Posted: {getPostData()?.date}</div>
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
                            <div className="card-title">John Doe</div>
                            <div className="font-semibold">Author</div>
                        </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-[400px] p-4">
                <h2 className="text-xl uppercase">Related Post</h2>
                <h2 className="text-xl uppercase">Recent Post</h2>
            </div>
        </div>
    );
}