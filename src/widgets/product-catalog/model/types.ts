export interface Product {
    id: string | number,
    title: string,
    category: string,
    shortDesc:string,
    image:string,
    description: string,
    price: number,
    oldPrice: number,
    rating?: number,
    isNew: boolean,
    colors?: ProductColorProps[],
}
export interface ProductColorProps{
    value:string,
    hex:string,
    image:string[],
    bataries:string,
}
export interface ProductCatalogProps {
    products: Product[]
}

