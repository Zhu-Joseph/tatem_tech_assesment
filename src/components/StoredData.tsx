import React from 'react'
import { FormData } from '../types'

interface Props {
  loginInfo: FormData
}

const StoredData: React.FC<Props>  = ({loginInfo}) => {
  
  return (
    <div>
      <div>First Name: {loginInfo.firstName}</div>
      <div>Last Name: {loginInfo.lastName}</div>
      <div>Email: {loginInfo.email}</div>
      <div>Password: {loginInfo.password}</div>
    </div>
  )
}

export default StoredData
