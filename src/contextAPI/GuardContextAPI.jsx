import React, { createContext } from 'react'


export const routeGuardContext = createContext('')

function GuardContextAPI({children}) {

  return (

    <>
        {children}
    </>
  )
}

export default GuardContextAPI