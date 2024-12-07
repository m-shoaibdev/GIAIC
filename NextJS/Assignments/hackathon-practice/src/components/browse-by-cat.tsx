import SubTitle from "./subTitle";
import LeftRightArrow from "./left-right-arrow";
import MainHeading from "./main-heading";

export default function BrowseByCaterogy() {
    return (
        <div className="md:container md:mx-auto p-4 xl:px-10">
            <SubTitle title="Categories" />
            <div className="flex justify-between items-center">
            <div className="flex gap-8 sm:gap-20 items-end">
                <MainHeading title="Browse By Category" />
            </div>
            <LeftRightArrow />
            </div>
            {/* Products List*/}
            <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6  md:gap-2 lg:gap-6 *:h-32 lg:*:w-auto md:*:h-28 lg:*:h-[145px] ">
                <div className="mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-12 xl:size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                <h5 className="text-base md:text-sm lg:text-base">Phones</h5>
                </div>

                <div className=" mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-12 xl:size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>
                <h5 className="text-base md:text-sm lg:text-base">Computers</h5>
                </div>

                <div className=" mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg className="size-12 xl:size-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10851_629)">
                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 42V49H35V42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 14V7H35V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="24" y1="23" x2="24" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="32" y1="26" x2="32" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_10851_629">
                <rect width="56" height="56" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h5 className="text-base md:text-sm lg:text-base">SmartWatch</h5>
                </div>

                <div className=" mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-12 xl:size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>
                <h5 className="text-base md:text-sm lg:text-base">Camera</h5>
                </div>

                <div className=" mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg className="size-12 xl:size-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10851_644)">
                <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_10851_644">
                <rect width="56" height="56" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h5 className="text-base md:text-sm lg:text-base">HeadPhones</h5>
                </div>

                <div className=" mx-1 mb-2 border border-black border-opacity-30 rounded flex flex-col gap-4 items-center justify-center hover:bg-softRed hover:text-white hover:border-softRed transition-all hover:cursor-pointer">
                <svg className="size-12 xl:size-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10851_809)">
                <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35 25.6666V25.6908" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M42 30.3333V30.3574" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_10851_809">
                <rect width="56" height="56" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h5 className="text-base md:text-sm lg:text-base">Gaming</h5>
                </div>
            </div>
        </div>
    );
}