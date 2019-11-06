import { IProductCart } from "../interfaces/IProductCart";

export class dataService {
    private tempId:number;
    private tempObject:IProductCart;
    private tempArray:Array<number>;
    private rootScope: ng.IRootScopeService;

    static $inject = [
        '$rootScope'
    ];

    constructor($rootScope: ng.IRootScopeService) {
        this.rootScope = $rootScope;
    }

    addData(id:number, title:string, price:number, image:string):void  {
       this.tempObject = {id, title, price, image};
       this.rootScope.$emit("addToCartEvent");
    }

    removeData(id:number):void  {
        this.tempId = id;
        this.rootScope.$emit("removeFromCartEvent");
    }

    removeAllData(array:Array<number>):void   {
        this.tempArray = array;
        this.rootScope.$emit("removeAllFromCartEvent");
    }

    getData():number {
        return this.tempId;
    }

    getDataObj():IProductCart {
        return this.tempObject;
    }

    getDataArray():Array<number>  {
        return this.tempArray;
    }
}