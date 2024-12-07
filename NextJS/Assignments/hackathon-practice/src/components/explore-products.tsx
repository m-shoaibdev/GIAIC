import SubTitle from "./subTitle";
import LeftRightArrow from "./left-right-arrow";
import ProductsCard from "./products-card";
import Button from "./button";
import MainHeading from "./main-heading";

export default function ExploreProducts() {
    return (
        <div className="md:container md:mx-auto p-4 xl:px-10 mb-10">
            <SubTitle title="Our Products" />
            <div className="flex justify-between items-center">
            <div className="flex gap-8 sm:gap-20 items-end">
                <MainHeading title="Explore Our Products" />
            </div>
            <LeftRightArrow />
            </div>
            {/* Products List*/}
            <div className="mt-10 mb-12 flex gap-7 overflow-x-auto !scroll-smooth no-scrollbar">
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </div>
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