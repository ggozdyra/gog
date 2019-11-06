import { ProductsComponentController } from "../controllers/ProductsComponentController";

export class ProductsComponent implements ng.IComponentOptions {
  
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;
  
    constructor() {
      this.controller = ProductsComponentController;
      this.controllerAs = "$ctrl";
      this.template = `
        <div class="product" ng-repeat="product in $ctrl.products">
            <div class="product__image">
                <picture ng-if="product.image !==''">
                    <source media="(min-width: 1px)" ng-srcset="assets/src/images/{{product.image}}">
                    <img ng-src="assets/src/images/{{product.image}}" alt="Product image" title="Product">
                </picture>
            </div>
            <div class="product__desc">
                <h2 class="product__title" ng-class="{'product__title--owned': product.owned}">{{product.title}}</h2>
                <div class="product__spec">
                    <div class="btn btn--owned" ng-class="{'btn--show': product.owned}">
                        Owned
                    </div>
                    <div class="btn btn--incart" ng-class="{'btn--show': !product.owned && product.inCart}">
                        In Cart 
                    </div>
                    <div class="btn btn--sale" ng-class="{'btn--show': !product.owned && !product.inCart && product.sale}">
                        {{product.saleValue}}%
                    </div>
                    <button class="btn btn--price" ng-class="{'btn--show': !product.owned && !product.inCart}" ng-click="$ctrl.addProduct(product.id, product.title, product.price, product.image)">
                        $ {{product.price}}
                    </button>
                </div>
            </div>
        </div>
      `;
    }
}