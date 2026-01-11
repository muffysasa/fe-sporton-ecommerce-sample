import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto px-50 py-20 flex gap-5">
                <div className="bg-primary-light aspect-square h-80 w-80 flex justify-center items-center">
                <Image src="/image/products/product-1.svg" 
                width={400} 
                height={400} 
                alt="product 1 image"
                className=""aspect-square object-contain w-full/>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-5xl mb-5">SportOn HyperSoccer</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-5 w-fit">Football</div>
                <p className="leading-loose">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, 
                    power, and unrivaled speed on the pitch. Featuring a striking, 
                    two-toned black and white design with deep crimson accents, 
                    these cleats don't just perform—they make a statement. 
                    Experience the future of football footwear with v2's enhanced fit 
                    and cutting-edge traction</p>
                    <div className="text-primary text-[32px] font-semibold mb-1">
                        {PriceFormatter(450000)} </div>
                    <ProductActions/>                     

            </div>
            

        </main>
    );
};

export default ProductDetail;

            