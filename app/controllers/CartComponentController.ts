import { IProductCart } from "../interfaces/IProductCart";
import { dataService } from "../services/dataService";

export class CartComponentController implements ng.IComponentController {
    private cart:Array<IProductCart>;
    private locStorageCheck: boolean;
    private cartUpdate:()=>void;
    private countCartAmount:()=>number;
    private cartAmount:number;
    private cartCount:number;
    private rootScope: ng.IRootScopeService;
    private removeProduct:(id:number)=>void;
    private removeAllProducts:()=>void;
    private dataService:dataService;
    
    constructor($rootScope: ng.IRootScopeService, dataService:dataService) {
        this.rootScope = $rootScope;
        this.dataService = dataService;
    }

    public $onInit ():void {
        this.cart = [];
        this.locStorageCheck = 'localStorage' in window && window['localStorage'] !== null;

        this.cartUpdate = ():void => {
            if (typeof localStorage !== 'undefined') {
                const storage:Array<IProductCart> = JSON.parse(localStorage.getItem('cartArray')) || [];
                
                if(storage.length) {
                    let item:IProductCart;
                    const array:Array<IProductCart> = [];
                    for(item of storage) {
                        this.cart.push(item);
                    } 
                }
            }
        }
        this.cartUpdate();
        
        this.countCartAmount = ():number => {
            let value:number = 0;
            let item:IProductCart;
            for(item of this.cart) {
                value+= item.price;
            }
            return value;
        }

        this.cartAmount = this.countCartAmount();
        this.cartCount = this.cart.length; 

        this.removeProduct = (id:number):void => {

            const product:IProductCart = this.cart.find(item => item.id === id)
            this.cartAmount = Number((this.cartAmount - product.price).toFixed(2));
            
            this.dataService.removeData(id);

            this.cart.splice(this.cart.findIndex((elem:IProductCart) => elem.id === id), 1);

            this.cartCount = this.cart.length;

            if (this.locStorageCheck) {
                const storage:Array<IProductCart> = [];
                let item:IProductCart;
                for(item of this.cart) {
                    storage.push(item);
                } 
                localStorage.setItem('cartArray', JSON.stringify(storage));
            }
        }

        this.removeAllProducts = ():void =>  {
            const array:Array<number> = [];
            for(let item of this.cart) {
                array.push(item.id);
            }
            this.dataService.removeAllData(array);
            this.cart = [];

            this.cartCount = this.cart.length;
            this.cartAmount = 0;

            if (this.locStorageCheck) {
                const storage:Array<IProductCart> = [];
                localStorage.setItem('cartArray', JSON.stringify(storage));
            }
        }

        this.rootScope.$on("addToCartEvent", ():void => {
            const obj:IProductCart = this.dataService.getDataObj();
            const result:IProductCart = this.cart.find(item => item.id === obj.id);
            if(!result) {
                this.cart.push(obj);
                this.cartCount = this.cart.length;
                const product:IProductCart = this.cart.find(item => item.id === obj.id)
                this.cartAmount = Number((this.cartAmount + product.price).toFixed(2));

                if (this.locStorageCheck) {
                    const storage:Array<IProductCart> = JSON.parse(localStorage.getItem('cartArray')) || [];
                    const newItem:IProductCart = obj;
                    storage.push(newItem);
                    localStorage.setItem('cartArray', JSON.stringify(storage));
                }
            } 
        })
    }
}