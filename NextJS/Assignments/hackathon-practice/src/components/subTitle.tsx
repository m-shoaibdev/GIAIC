export default function SubTitle( {title}:{title: string} ) {
    return (
        <div className="subtitle flex gap-5 items-center mb-5">
            <div className="bg-softRed w-4 md:w-5  h-8 md:h-10 rounded "></div>
            <h1 className="text-softRed text-sm md:text-base font-semibold">{title}</h1>
        </div>
    );
}