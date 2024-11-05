export default function HrHeadDivider({text, leftline, rightline}:{text:string,leftline?:boolean, rightline?:boolean}) {
    return(
        <div className="flex items-center my-5">
            {leftline && <div className="bg-primary h-0.5 w-full grow mx-3"></div>}
            <h1 className="md:text-5xl text-3xl font-semibold text-primary mx-2 shrink-0">{text}</h1>
           {rightline && <div className="bg-primary h-0.5 w-full grow mx-3"></div>}
           {!rightline && <div className="md:w-1/2"></div>}

        </div>
    )
}