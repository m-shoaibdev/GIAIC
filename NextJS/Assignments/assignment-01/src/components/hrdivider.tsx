export default function HrHeadDivider({text, leftline, rightline}:{text:string,leftline?:boolean, rightline?:boolean}) {
    return(
        <div className="flex items-center my-5">
            {leftline && <div className="bg-primary h-0.5 w-5 sm:w-full grow mx-3"></div>}
            <h1 className=" text-3xl font-semibold text-primary mx-2 md:text-4xl lg:text-5xl  md:shrink-0 break-normal">{text}</h1>
           {rightline && <div className="bg-primary h-0.5  w-5 sm:w-full grow mx-3"></div>}
           {!rightline && <div className="hidden md:w-1/2 sm:block"></div>}

        </div>
    )
}