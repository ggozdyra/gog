import { IProduct } from "../interfaces/IProduct";

export class productsService {

    constructor() {}

    products():Array<IProduct> {
        const array:Array<IProduct> = [
            { id: 1, owned: false, inCart: false, title: "Oddworld: Strangers Wrath", price: 9.99, sale: true, saleValue: -50, image: "product_oddworld.jpg" },
            { id: 2, owned: true, inCart: false, title: "Chaos on Deponia", price: 9.99, sale: false, saleValue: 0, image: "product_deponia.jpg" },
            { id: 3, owned: false, inCart: false, title: "The Settlers 2: Gold Edition", price: 5.99, sale: false, saleValue: 0, image: "product_the_settlers_2.jpg" },
            { id: 4, owned: false, inCart: false, title: "Neverwinter Nights", price: 4.99, sale: true, saleValue: -50, image: "product_neverwinter_nights.jpg" },
            { id: 5, owned: false, inCart: false, title: "Assasin's Creed: Directors Cut", price: 9.99, sale: false, saleValue: 0, image: "product_assasins_creed.jpg" }
          ];

        return array;
    }

}