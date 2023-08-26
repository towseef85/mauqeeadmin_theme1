import '../index.styles.less';
import React from "react";
import Brands from "./brands";
import Category from "./category";
import Product from "./products";
import ProductSettings from './productSettings';
import ProductAttributes from './productSettings/ProductAttributes';
import ProductTags from './productSettings/ProductTags';
import TaxCategory from './productSettings/TaxCategory';
import ShippingProviders from './productSettings/ShippingProviders';
import Currencies from './productSettings/Currencies';
import PaymentMethods from './productSettings/PaymentMethods';
import GiftCards from './productSettings/GiftCards';




export const catalogRoutes=[
    {
        path:'/catalog/brands',
        element:<Brands/>
    },
    {
        path:'/catalog/brands/:id',
        element:<Brands/>
    },
    {
        path:'/catalog/brands/create',
        element:<Brands/>
    },
    {
        path:'/catalog/brands/create/:id',
        element:<Brands/>
    },
    {
        path:'/catalog/category',
        element:<Category/>
    },
    {
        path:'/catalog/category/:id',
        element:<Category/>
    },
    {
        path:'/catalog/category/create',
        element:<Category/>
    },
    {
        path:'/catalog/category/create/:id',
        element:<Category/>
    },
    {
        path:'/catalog/products',
        element:<Product/>
    },
    {
        path:'/catalog/product/settings',
        element:<ProductSettings/>
    },
    {
        path:'/productsettings/productattributes',
        element:<ProductAttributes/>
    },
    {
        path:'/productsettings/producttag',
        element:<ProductTags/>
    },
    {
        path:'/productsettings/shippingproviders',
        element:<ShippingProviders/>
    },
    {
        path:'/productsettings/taxcategory',
        element:<TaxCategory/>
    }, 
    {
        path:'/productsettings/currencies',
        element:<Currencies/>
    },
    {
        path:'/productsettings/paymentmethods',
        element:<PaymentMethods/>
    },
    {
        path:'/productsettings/giftcards',
        element:<GiftCards/>
    }

]