import React from 'react'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './index.style.less';

export default function AppScrollbar({children, scrollToTop, className, ...others}) {
  return (
    <SimpleBarReact {...others} className={className}>
      {children}
    </SimpleBarReact>
  )
}
