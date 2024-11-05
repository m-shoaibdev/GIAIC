import Image, { StaticImageData } from "next/image";

type TypeSkinbox = {
    src: StaticImageData,
    alt: string,
    h2head: string,
    partext: string
}
export default function SkinBox({src, alt, h2head, partext}:TypeSkinbox) {
    return(
        <div className="md:w-1/4 md:my-0 my-10 ">
          <Image src={src}
            alt={alt}
            className="mx-auto"/>
            <h2 className="text-3xl text-secondary font-light my-3">{h2head}</h2>
            <p className="text-xl text-bcolor">{partext}</p>
        </div>
    )
}