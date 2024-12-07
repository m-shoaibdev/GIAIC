import Link from "next/link";
interface ButtonProps {
    title: string,
    bgColor?: string,
    align?: string
}

export default function Button( { title, bgColor="bg-softRed", align }: ButtonProps ) {
    return (
       <div className={`text-${align}`}>
        <Link href="/" className={`${bgColor} text-white text-sm md:text-base font-normal md:font-medium px-5 md:px-12 py-2 sm:py-3 md:py-4 rounded bg-opacity-90 hover:bg-opacity-100`}>
            {title}
        </Link>
       </div>
    )
}