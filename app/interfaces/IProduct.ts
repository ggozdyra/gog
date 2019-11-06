export interface IProduct {
    id: number;
    owned: boolean;
    inCart: boolean;
    title: string;
    price: number;
    sale: boolean;
    saleValue: number;
    image: string;
}