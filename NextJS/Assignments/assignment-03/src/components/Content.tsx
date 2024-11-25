import Image, { StaticImageData } from "next/image";

interface IContent {
    alignImage?: string,
    heading: string,
    paragraph: string,
    textColor?: string,
    btn: string,
    imgUrl?: string | StaticImageData,
    imgBox?: boolean
}

export default function Content( {alignImage, heading, paragraph, textColor, btn, imgUrl, imgBox}: IContent ) {
    return (
        <div className="md:container md:mx-auto px-4 md:flex items-center gap-10 lg:gap-12">
            
            {imgBox === false ? "" : alignImage === "left" &&
            <div className="flex-1 py-10">
                <div className={ imgUrl ? "p-4" : "bg-secondary p-4 min-h-[400px] md:h-[500px] lg:h-[540px]"}>
                    {imgUrl && <Image src={imgUrl} alt={heading} />}
                </div>
            </div> }

            <div className={imgBox === false ? "text-center flex-1 py-10" : `text-${textColor} flex-1 py-10`}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">{heading}</h1>
                <p className="text-base md:text-lg font-normal mt-6 mb-8 md:mt-10 md:mb-14">
                    {paragraph}
                </p>
              <button className="bg-primary text-white rounded-[6px] px-4 py-3 lg:px-6 lg:py-4 text-base md:text-lg inline-flex items-center my-2">
                {btn}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="w-4 h-4 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {imgBox === false ? "" : alignImage === "right" &&
            <div className="flex-1 py-10">
                <div className={ imgUrl ? "p-4" : "bg-secondary p-4 min-h-[400px] md:h-[500px] lg:h-[540px]"}>
                    {imgUrl && <Image src={imgUrl} alt={heading} />}
                </div>
            </div> }
            
        </div>
    );
}