import React from 'react'
import {useParams, useLocation} from 'react-router-dom';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import CategoryDetails from './CategoryDetails'
import AppContent from '../../../components/common/AppLayout/AppContent';

export default function Categories() {
  const {id} = useParams();
  const {pathname} = useLocation()
  const onGetMainComponent =()=>{
    if(pathname.includes('/create')) return <AddCategory/>
    if(id) return <CategoryDetails id={id} />
    else{
      return <CategoryList />
    }
  }
  return (
  <AppContent title="Category">
  {onGetMainComponent()}
  </AppContent>
  )
}
