import Hero from "@/components/herosection"
import { blogsData } from "./blogs/page";
import PostCard from "@/components/postcard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="md:container md:mx-auto px-3.5 my-8">
        <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            blogsData.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
      </div>
    </>
  );
}