import Image from "next/image";
import Link from "next/link";

export const blogsData = [
    {
        "id": 1,
        "img": "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2022/05/bigstock-Grilled-Marbled-Meat-Steak-Fil-268244788.jpg",
        "title": "Gourmet Delights",
        "postSlug": "gourmet-delights",
        "content": "A journey into the finest cuisines around the world.At the pinnacle of this playground lies Gourmet Delights, where flavors, textures, and artistry converge to create unforgettable dining experiences. Gourmet cuisine is not just about feeding the body but also nourishing the soul, with its commitment to quality, innovation, and aesthetics.",
        "category": "Food",
        "date": "2023-07-01",
        "author": "Culinary Artist",
        "comments": [
            { "id": 1, "name": "Food Lover", "message": "This looks amazing!" },
            { "id": 2, "name": "Chef Anne", "message": "A delicious read!" }
        ]
    },
    {
        "id": 2,
        "img": "https://media.licdn.com/dms/image/v2/D4D12AQHH_4W1vU65Ew/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1721648824420?e=2147483647&v=beta&t=VOjMK8hgwfrBrUmzJrr7S78rwL1CR0px_WPBH3sONO4",
        "title": "Top 10 Travel Destinations",
        "postSlug": "travel-destinations",
        "content": "As global travel continues to evolve, new and exciting destinations are emerging on the travel radar. For 2024, these hidden gems offer unique experiences, rich cultures, and breathtaking landscapes that are waiting to be explored. Here are the top 10 emerging travel destinations for 2024 that should be on your bucket list. Why Explore Emerging Travel Destinations Emerging travel destinations offer a fresh perspective, away from the crowds and typical tourist routes. They provide an opportunity to discover new cultures, cuisines, and landscapes, often with more affordability and authenticity.",
        "category": "Travel",
        "date": "2023-08-15",
        "author": "World Explorer",
        "comments": [
            { "id": 1, "name": "Traveler Ted", "message": "Adding these to my bucket list!" },
            { "id": 2, "name": "Wanderlust Lucy", "message": "Great recommendations!" },
            { "id": 3, "name": "Travel Blogger", "message": "Excited to explore these destinations!" },
        ]
    },
    {
        "id": 3,
        "img": "https://www.themosterlawfirm.com/wp-content/uploads/2021/06/trace-3157431_1920.jpg",
        "title": "The Future of Artificial Intelligence",
        "postSlug": "future-of-ai",
        "content": "How AI is reshaping our world with innovative solutions.",
        "category": "Technology",
        "date": "2023-09-10",
        "author": "Tech Enthusiast",
        "comments": [
            { "id": 1, "name": "AI Fan", "message": "Fascinating read!" },
            { "id": 2, "name": "Developer John", "message": "AI is the future!" },
        ]
    },
    {
        "id": 4,
        "img": "https://www.gyansetu.in/wp-content/uploads/2024/02/maxresdefault-2-780x383.webp",
        "title": "Becoming a Full-Stack Developer",
        "postSlug": "full-stack-development",
        "content": "Mastering the art of both front-end and back-end development to build robust web applications.",
        "category": "Technology",
        "date": "2023-10-01",
        "author": "Dev Guru",
        "comments": [
            { "id": 1, "name": "Learner Mike", "message": "Very inspiring journey!" },
            { "id": 2, "name": "Sarah Coder", "message": "Great tips for newbies." },
            { "id": 3, "name": "Dev Pro", "message": "Excited about future prospects!" },
        ]
    },
    {
        "id": 5,
        "img": "https://cdn.evrimagaci.org/5rInAIkBvcfqM2rslYqDaxQwSLk=/1200x0/storage.evrimagaci.org%2Ftpg%2F39f50d28-31bc-4102-94c5-097347324fb0.jpeg",
        "title": "AI Agents: Transforming Development",
        "postSlug": "ai-agents-in-dev",
        "content": "AI-driven agents are revolutionizing how full-stack development is approached, providing powerful tools to streamline coding, testing, and deployment.",
        "category": "AI Technology",
        "date": "2023-10-15",
        "author": "AI Innovator",
        "comments": [
            { "id": 1, "name": "Techie Lisa", "message": "AI agents are game-changers!" },
            { "id": 2, "name": "Dev Pro", "message": "Excited about future prospects!" }
        ]
    }
];

export default function Blog() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-8">All Blogs and Articles</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    blogsData.map((post) => (
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