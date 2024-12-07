interface HeadingProps {
    title: string,
}

export default function MainHeading( { title }: HeadingProps ) {
    return (
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-inter mr-1.5">{title}</h1>
    )
}