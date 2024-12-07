import SubTitle from "./subTitle";
import ProductsCard from "./products-card";
import Button from "./button";
import MainHeading from "./main-heading";

export default function BestSelling() {
    return (
        <div className="md:container md:mx-auto p-4 xl:px-10">
            <SubTitle title="This Month" />
            <div className="flex justify-between items-center">
            <div className="flex gap-8 sm:gap-20 items-end">
                <MainHeading title="Best Selling Products" />
            </div>
            <Button title="View All" align="center"/>
            </div>
            {/* Products List*/}
            <div className="mt-10 flex gap-7 overflow-x-auto !scroll-smooth no-scrollbar">
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </div>
        </div>
    );
}