import React from 'react'
import {useParams, useLocation} from 'react-router-dom';
import AddBrand from './AddBrand';
import BrandDetails from './BrandDetails';
import BrandList from './BrandList';

import AppContent from '../../../components/common/AppLayout/AppContent';

export default function Brands() {
  const {id} = useParams();
  const {pathname} = useLocation()




  const onGetMainComponent =()=>{
    if(pathname.includes('/create')) return <AddBrand/>
    if(id) return <BrandDetails id={id} />
    else{
      return <BrandList />
    }
  }
  return (
  <AppContent title="Brands">
  {onGetMainComponent()}
  </AppContent>
  )
}
