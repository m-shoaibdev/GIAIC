import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-200 bg-opacity-50 py-10">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to Our Blog</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link href="/blogs" className="btn btn-primary">View All Articles</Link>
    </div>
  </div>
</div>
  );
}