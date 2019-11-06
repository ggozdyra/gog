import { IProduct } from "../interfaces/IProduct";
import { dataService } from "../services/dataService";
import { productsService } from "../services/productsService"
import * as angular from "angular";

export class ProductsComponentController implements ng.IComponentController {
    private products:Array<IProduct>;
    private locStorageCheck: boolean;
    private productsUpdate:()=>void;
    private addProduct:(id:number, title:string, price:number, image:string)=>void;
    private rootScope: ng.IRootScopeService;
    private dataService:dataService;
    private productsService:productsService;

    constructor($rootScope: ng.IRootScopeService, dataService:dataService, productsService:productsService) {
        this.rootScope = $rootScope;
        this.dataService = dataService;
        this.productsService = productsService;
    }

    public $onInit () {
        this.products = this.productsService.products();
        this.locStorageCheck = 'localStorage' in window && window['localStorage'] !== null;

        this.productsUpdate = ():void => {

            if (this.locStorageCheck) {
                const storage:Array<IProduct> = JSON.parse(localStorage.getItem('cartArray')) || [];
                
                if(storage.length) {
                    let elem:IProduct;
                    let product:IProduct;
                    for(elem of storage) {
                        product = this.products.find(item => item.id === elem.id);
                        product.inCart = true;
                    } 
                }
            }
        }
        this.productsUpdate();

        this.addProduct = (id:number, title:string, price:number, image:string):void => {
            const scopeProduct:IProduct = this.products.find(item => item.id === id);
            scopeProduct.inCart = true;
            this.dataService.addData(id, title, price, image);

            const elem = angular.element(document.querySelector(".menu-cart__count")).addClass('activated');
            setTimeout(function() {
                elem.removeClass("activated");
            }, 500);
        }

        this.rootScope.$on("removeFromCartEvent", ():void => {
            const id:number = this.dataService.getData();
            const scopeProduct:IProduct = this.products.find(item => item.id === id);
            scopeProduct.inCart = false;
        });

        this.rootScope.$on("removeAllFromCartEvent", ():void =>{
            const array:Array<number> = this.dataService.getDataArray();
            let id:number;
            for(id of array) {
                const scopeProduct = this.products.find(item => item.id === id);
                scopeProduct.inCart = false;
            }
        });
    }
}