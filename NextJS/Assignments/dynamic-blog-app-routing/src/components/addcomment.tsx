"use client";
import { useState } from "react";
import { blogsData } from "@/app/blogs/page";
import { useParams } from "next/navigation";    



export default function AddComment() {

    const [name, setName] = useState("");
    const [newcomment, setNewComment] = useState("");
    const [comments, setComments] = useState< { id: number; name: string; message: string, dateTime: string }[]>([]);

    const { posturl } = useParams(); // get the posturl from the URL
    // console.log("Get Url", posturl);
   const getComments = () => {
        const commentData = blogsData.find((post) => post.postSlug === posturl);
        // console.log(commentData?.comments);
        return commentData?.comments
   }
    const postcomments = getComments();
    console.log(postcomments);

    const addComment = () => {
        if (!name || !newcomment) {
            return alert("Please fill Name and Comment");
        }
        setComments([...comments, {id: comments.length + 1, name: name, dateTime: new Date().toLocaleDateString("en-US"),  message: newcomment }]);
        setName("");
        setNewComment("");
    }

    return (
        <div className="bg-base-100 px-10">
            <h1>Add Comment</h1>
            
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="your name" className="input input-bordered " 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Comment</span>
                    </label>
                    <textarea placeholder="Add a comment..." className="textarea textarea-bordered"
                    value={newcomment} onChange={(e) => setNewComment(e.target.value)}></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary inline" onClick={addComment}>Send</button>
                </div>


                <div>


                    {postcomments?.map((comment) => (
                        
<div  key={comment.id} className="flex gap-4 items-center my-5">
    <div className="avatar placeholder self-start">
    <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span>{comment.name.charAt(0).toUpperCase()}{comment.name.charAt(comment.name.indexOf(" ") + 1).toUpperCase()}</span>   {/* sort first name and last name and get the first letter*/}
    </div>
    </div>
    <div>
    <div className="font-semibold ">{comment.name}</div>
    <div className="text-xs text-neutral-content">2 days ago</div>
    <div>{comment.message}</div>
    </div>
</div>
                    ))}
                    {comments?.map((comment) => (
                                                
<div  key={comment.id} className="flex gap-4 items-center my-5">
    <div className="avatar placeholder self-start">
    <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span>{comment.name.charAt(0).toUpperCase()}{comment.name.charAt(comment.name.indexOf(" ") + 1).toUpperCase()}</span>   {/* sort first name and last name and get the first letter*/}
    </div>
    </div>
    <div>
    <div className="font-semibold ">{comment.name}</div>
    <div className="text-xs text-neutral-content"> { comment.dateTime }</div>
    <div>{comment.message}</div>
    </div>
</div>
                    ))}
                </div>
        </div>
    );
}