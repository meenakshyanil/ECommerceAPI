import { ICategory } from "./category.model";

export interface Iproduct{
    id?: number;
    title?: string;
    description?: string;
    images?:string;
    category?:ICategory;
    price?: number;
}