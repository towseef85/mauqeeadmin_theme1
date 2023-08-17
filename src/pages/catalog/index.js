import '../index.styles.less';
import React from "react";
import Brands from "./brands";
import Category from "./category";
import Product from "./products";



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
        path:'/catalog/category',
        element:<Category/>
    },
    {
        path:'/catalog/products',
        element:<Product/>
    }

]