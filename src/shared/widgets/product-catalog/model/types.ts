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
}
export interface ProductCatalogProps {
    products: Product[]
}

