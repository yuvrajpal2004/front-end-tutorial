import React from 'react'

export const data=React.createContext();

function UserContext({children}) {
   let usreName="ambuj kumar"
  return (
    <div>
        <data.Provider  value={usreName}>
            {children}
        </data.Provider>
     
    </div>
  )
}

export default UserContext
