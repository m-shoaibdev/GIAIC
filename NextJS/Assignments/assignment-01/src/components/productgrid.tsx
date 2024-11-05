import Image from "next/image";
import prodcut1 from "../public/image01.jpg";
import prodcut2 from "../public/image02.jpg";
import prodcut3 from "../public/image03.jpg";
import prodcut4 from "../public/image04.jpg";
import prodcut5 from "../public/image05.jpg";
import prodcut6 from "../public/image06.jpg";
export default function ProductGrid() {
    return (
<div className="md:w-1/2 grid grid-cols-3 md:grid-cols-3 gap-4 items-center my-5">
    <div className="grid gap-5">
        <div className="md:-ml-5">
            <Image className="h-auto max-w-full rounded" src={prodcut1} alt=""/>
        </div>
        <div className="md:ml-12 md:-mb-4">
            <Image className="h-auto max-w-full rounded" src={prodcut4} alt=""/>
        </div>
    </div>
    <div className="grid gap-5">
        <div className="md:-ml-6 md:-mt-2">
            <Image className="h-auto max-w-full rounded" src={prodcut2} alt=""/>
        </div>
        <div className="md:ml-4">
            <Image className="h-auto max-w-full rounded" src={prodcut5} alt=""/>
        </div> 
    </div>
    <div className="grid gap-5">
        <div className="md:-ml-8">
            <Image className="h-auto max-w-full rounded" src={prodcut3} alt=""/>
        </div>
        <div className="md:-mb-4 md:ml-2.5">
            <Image className="h-auto max-w-full rounded" src={prodcut6} alt=""/>
        </div>
       
    </div>
   
</div>

    )
}