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
    colors?: ProductColor[],
}
export interface ProductColor{
    value:string,
    hex:string,
    image:string,
}
export interface ProductCatalogProps {
    products: Product[]
}

