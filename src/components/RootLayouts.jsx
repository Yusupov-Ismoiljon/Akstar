import React from 'react'
import Frame from './Frame'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div className="font-raleway">
        <Frame />
        <Outlet/>
    </div>
  )
}

export default RootLayouts