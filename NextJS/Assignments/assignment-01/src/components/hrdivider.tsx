export default function HrHeadDivider({text}:{text:string}) {
    return(
        <div className="flex items-center my-10">
            <div className="bg-primary h-0.5 w-full grow mx-3"></div>
            <h1 className="md:text-5xl sm:text-3xl font-semibold text-primary mx-2 shrink-0">{text}</h1>
            <div className="bg-primary h-0.5 w-full grow mx-3"></div>
        </div>
    )
}