"use client";
import { useState } from "react";
import { blogsData } from "@/app/blogs/page";
import { useParams } from "next/navigation";



export default function AddComment() {

    const [name, setName] = useState("");
    const [newcomment, setNewComment] = useState("");
    const [comments, setComments] = useState<{ id: number; name: string; message: string, dateTime: string }[]>([]);

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
        setComments([...comments, { id: comments.length + 1, name: name, dateTime: new Date().toLocaleDateString("en-US"), message: newcomment }]);
        setName("");
        setNewComment("");
    }
    const deleteComment = (id: number) => {
        const updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    }

    return (
        <div className="bg-base-100 px-10">
            <h1>Leave a Comment</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="your name" className="input input-bordered "
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Comment</span>
                </label>
                <textarea placeholder="Add a comment..." className="textarea textarea-bordered"
                    value={newcomment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary inline" onClick={addComment}>Post Comment</button>
            </div>

            <div>
                <div className="my-5">
                    {
                        postcomments && postcomments.length > 0 || comments.length > 0 ? (
                            <h1 className="text-2xl font-bold">Comments</h1>
                        )
                            : (
                                <h1 className="text-2xl font-bold">No Comments Yet</h1>
                            )
                    }
                </div>
                {postcomments?.map((comment) => (

                    <div key={comment.id} className="flex gap-4 items-center my-5">
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

                    <div key={comment.id} className="flex gap-4 items-center my-5">
                        <div className="avatar placeholder self-start">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                <span>{comment.name.charAt(0).toUpperCase()}{comment.name.charAt(comment.name.indexOf(" ") + 1).toUpperCase()}</span>   {/* sort first name and last name and get the first letter*/}
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold ">{comment.name}</div>
                            <div className="text-xs text-neutral-content"> {comment.dateTime}</div>
                            <div>{comment.message}</div>
                        </div>
                        <div className="self-start">
                            {/* <button>Edite</button> */}
                            <button onClick={() => deleteComment(comment.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}