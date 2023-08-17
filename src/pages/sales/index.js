
import React from "react";
import Orders from "./orders";
import Shipments from "./shipments";



export const salesRoutes=[
    {
        path:'/sales/orders',
        element:<Orders/>
    },
    {
        path:'/sales/shipment',
        element:<Shipments/>
    }

]