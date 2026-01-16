export interface Product {
    id: string | number,
    title: string,
    shortDesc:string,
    image:string,
    description: string,
    originalPrice: number,
    discountPrice?: number,
    rating?: number,
    highlights?: Hightlight[]
}

interface Hightlight {
    title: string;
    value: string;
}

export interface ProductCatalogProps {
    products: Product[]
}

