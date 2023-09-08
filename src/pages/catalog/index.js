import '../index.styles.less';
import React from "react";


const TaxCategory= React.lazy(()=>import('./productSettings/TaxCategory'));
const ShippingProviders= React.lazy(()=>import('./productSettings/ShippingProviders'));
const Currencies= React.lazy(()=>import('./productSettings/Currencies'));
const PaymentMethods= React.lazy(()=>import('./productSettings/PaymentMethods'));
const GiftCards= React.lazy(()=>import('./productSettings/GiftCards'));
const Brands = React.lazy(()=> import('./brands'))
const Category= React.lazy(() => import('./category'))
const Product= React.lazy(() => import('./products'))
const ProductSettings= React.lazy(() => import('./productSettings'))
const ProductAttributes= React.lazy(()=>import('./productSettings/ProductAttributes'));
const ProductTags= React.lazy(()=>import('./productSettings/ProductTags'));


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