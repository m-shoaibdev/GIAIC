import Link from "next/link";
import Image from "next/image";

type Tpost = {
    id?: number;
    title: string;
    content: string;
    img: string;
    postSlug: string;
    date: string;
    category: string;
    comments?: Tcomment[]
}
type Tcomment = {
    id: number;
    name: string;
    message: string;
}
type PostCardProps = {
    post: Tpost;
};

export default function SidePostCard({ post }: PostCardProps) {
    return (
        <div className="card bg-base-100  shadow-xl">
            <Link href={`/blogs/${post.postSlug}`}>
                <figure>
                    <Image src={post.img} alt={post.title} width={500} height={300} />
                </figure>
            </Link>
            <div className="card-body">
            <div className="card-actions justify-between">
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>{post?.date}</div>
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>
{post?.category}</div>
                        <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>{post?.comments?.length}</div>
                    </div>
                <h2 className="card-title"><Link href={`/blogs/${post.postSlug}`}>{post.title}</Link></h2>
                <p>{post.content.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}