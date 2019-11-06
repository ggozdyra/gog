import { CartComponentController } from "../controllers/CartComponentController";

export class CartComponent implements ng.IComponentOptions {
  
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;
  
    constructor() {
      this.controller = CartComponentController;
      this.controllerAs = "$ctrl";
      this.template = `
        <a class="menu-cart__link" ng-click="menuShow = true">
            <svg class="menu-cart__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="16.03" height="15" viewBox="0 0 16.03 15">
                <defs>
                    <style>
                    .cls-1 {
                        fill: #262626;
                        opacity: 0.85;
                        fill-rule: evenodd;
                    }
                    </style>
                </defs>
                <path d="M15.580,1.577 L14.030,1.515 L11.901,10.285 L11.423,11.009 L2.174,11.009 L1.812,10.285 L-0.002,2.886 L1.737,2.778 L3.433,9.499 L10.199,9.499 L12.516,0.529 L13.502,0.000 L16.029,0.032 L15.580,1.577 ZM4.373,7.625 L4.373,7.250 L9.497,7.250 L9.497,7.625 L4.373,7.625 ZM4.060,5.219 L9.935,5.219 L9.935,5.594 L4.060,5.594 L4.060,5.219 ZM3.310,3.188 L10.497,3.188 L10.497,3.563 L3.310,3.563 L3.310,3.188 ZM3.848,12.035 C4.663,12.035 5.323,12.698 5.323,13.517 C5.323,14.336 4.663,15.000 3.848,15.000 C3.034,15.000 2.374,14.336 2.374,13.517 C2.374,12.698 3.034,12.035 3.848,12.035 ZM9.990,12.035 C10.804,12.035 11.464,12.698 11.464,13.517 C11.464,14.336 10.804,15.000 9.990,15.000 C9.175,15.000 8.515,14.336 8.515,13.517 C8.515,12.698 9.175,12.035 9.990,12.035 Z" class="cls-1"/>
                </svg>
            <span class="menu-cart__count">{{$ctrl.cartCount}} </span>
        </a>
        <div class="menu-sub animate" ng-show="menuShow" ng-mouseleave="menuShow = false" ng-mouseover="menuShow = true">
            <div class="menu-sub__header">
                <p class="menu-sub__txt">
                    <span class="menu-sub__count">{{$ctrl.cartCount}}</span>
                    items in cart
                </p>
                <p class="menu-sub__total">
                    $ {{$ctrl.cartAmount}}
                </p>
                <button class="btn-big btn-big--clear" ng-click="$ctrl.removeAllProducts()">
                    Clear cart
                </button>
            </div>
            <div class="menu-products">
                <div class="menu-products__item" ng-repeat="product in $ctrl.cart">
                    <picture class="menu-products__item-img">
                        <source media="(min-width: 1px)" ng-srcset="assets/src/images/{{product.image}}">
                        <img class="menu-products__item-src" ng-src="assets/src/images/{{product.image}}" alt="Product image" title="Product">
                    </picture>
                    <div class="menu-products__item-desc">
                        <p class="menu-products__item-title">{{product.title}}</p>
                        <a class="menu-products__item-link" ng-click="$ctrl.removeProduct(product.id)">Remove</a>
                    </div>
                    <p class="menu-products__item-price">$ {{product.price}}</p>
                </div>
                <p class="menu-products__empty" ng-show="!$ctrl.cart.length">No items in cart</p>   
            </div>
        </div>
      `;
    }
  }