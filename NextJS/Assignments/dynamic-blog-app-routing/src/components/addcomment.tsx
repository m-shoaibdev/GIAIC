"use client";
import { useState } from "react";

export default function AddComment() {
    const [name, setName] = useState("");
    const [newcomment, setNewComment] = useState("");
    const [comments, setComments] = useState< { name: string; message: string, dateTime: Date }[]>([]);

    const addComment = () => {
        setComments([...comments, { name: name, dateTime: new Date(),  message: newcomment }]);
        setName("");
        setNewComment("");
    }

    return (
        <div className="bg-base-100 px-10">
            <h1>Add Comment</h1>
            
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
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
                    <button className="btn btn-primary" onClick={addComment}>Send</button>
                </div>


                <div>
                    {comments.map((comment) => (
                        <div key={comment.name}>
                            <p>{comment.name}</p>
                            <p>{comment.dateTime.toString()}</p>
                            <p>{comment.message}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
}