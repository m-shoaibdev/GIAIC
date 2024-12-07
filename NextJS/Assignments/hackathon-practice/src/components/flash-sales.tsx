import SubTitle from "./subTitle";
import LeftRightArrow from "./left-right-arrow";
import ProductsCard from "./products-card";
import Button from "./button";
import MainHeading from "./main-heading";

export default function FlashSales() {
    return (
        <div className="md:container md:mx-auto p-4 xl:px-10">
            <SubTitle title="Today’s" />
            <div className="flex gap-3 justify-center  items-end md:hidden mb-3">
                    <div><span className="text-xs font-medium">Days</span>
                    <h3 className="font-inter text-3xl font-bold">03</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Hours</span>
                    <h3 className="font-inter text-3xl font-bold">23</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Minutes</span>
                    <h3 className="font-inter text-3xl font-bold">19</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Seconds</span>
                    <h3 className="font-inter text-3xl font-bold">56</h3></div>
                </div>
            <div className="flex justify-between items-center">
            <div className="flex gap-8 sm:gap-20 items-end">
                <MainHeading title="Flash Sales" />
                <div className="hidden md:flex gap-3  items-end">
                    <div><span className="text-xs font-medium">Days</span>
                    <h3 className="font-inter text-3xl font-bold">03</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Hours</span>
                    <h3 className="font-inter text-3xl font-bold">23</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Minutes</span>
                    <h3 className="font-inter text-3xl font-bold">19</h3></div>
                    <div className="text-softRed text-3xl font-inter mb-1">:</div>
                    <div><span className="text-xs font-medium">Seconds</span>
                    <h3 className="font-inter text-3xl font-bold">56</h3></div>
                </div>
            </div>
            <LeftRightArrow />
            </div>
            {/* Products List*/}
            <div className="mt-10 mb-12 lg:mb-14 flex gap-7 overflow-x-auto !scroll-smooth no-scrollbar">
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </div>
            <Button title="View All Products" align="center"/>
        </div>
    );
}