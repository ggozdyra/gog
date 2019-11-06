import * as angular from "angular";

const app = angular.module("app", [require('angular-animate')]);

import { productsService } from "./services/productsService";
app.service("productsService", productsService);

import { dataService } from "./services/dataService";
app.service("dataService", ["$rootScope", dataService]);

import { CartComponent } from "./components/CartComponent";
app.component("cartcomponent",  new CartComponent());

import { ProductsComponent } from "./components/ProductsComponent"; 
app.component("productscomponent", new ProductsComponent());