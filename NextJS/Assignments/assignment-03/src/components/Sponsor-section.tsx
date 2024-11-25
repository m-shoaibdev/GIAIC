import Image from "next/image";
import AppleImg from "../public/Apple.png";
import Microsoftimg from "../public/Microsoft.png";
import SlackImg from "../public/Slack_Technologies.png";
import GoogleImg from "../public/Google.png";

export default function Sponsor(){
    return(
     <div className="bg-white py-8 md:py-20 lg:py-24">
        <div className="md:container md:mx-auto px-4 ">
          <h1 className="text-dark text-4xl md:text-5xl lg:text-7xl font-bold text-center">Our Sponsors</h1>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 sm:gap-3 md:gap-10 lg:gap-0 items-center my-10  lg:mt-20">
              <div className="sm:pl-8">
              <Image src={AppleImg} alt="Apple" className="mx-auto sm:mx-0 w-12 sm:w-auto"/>
              </div>
              <div className="sm:col-span-2">
              <Image src={Microsoftimg} alt="Microsoft" className="mx-auto w-44 sm:w-48 md:w-auto"/>
              </div>
              <div className="sm:col-span-2">
              <Image src={SlackImg} alt="Slack" className="mx-auto w-40 sm:w-44 md:w-auto"/>
              </div>
              <div>
              <Image src={GoogleImg} alt="Google" className="mx-auto sm:mx-0 w-36 sm:w-auto"/>
              </div>
            </div>
        </div>
      </div>
    );
}