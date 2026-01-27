import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
    params: Promise<{id:string}>;
}

const ProductDetail = async ({params}: TPageProps) => {
    const {id} = await params; 
    const product = await getProductDetail(id);

    return (
        <main className="container mx-auto px-50 py-20 flex gap-5">
                <div className="bg-primary-light aspect-square h-80 w-80 flex justify-center items-center">
                <Image src={getImageUrl(product.imageUrl)} 
                width={400} 
                height={400} 
                alt="product.name"
                className="aspect-square object-contain w-full"/>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-5xl mb-5">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-5 w-fit">{product.category.name}</div>
                <p className="leading-loose">{product.description}</p>
                    <div className="text-primary text-[32px] font-semibold mb-1">
                        {PriceFormatter(product.price)} </div>
                    <ProductActions product ={product} stock={product.stock}/>                     

            </div>
            

        </main>
    );
};

export default ProductDetail;

            