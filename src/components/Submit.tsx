// import './Submit.css'
import { localStorageKey } from '../types'

const Submit = () => {
  const loginInfo = JSON.parse(localStorage.getItem(localStorageKey) || '{}')
  
  const displayLoginInfo = () => {
    // Loops through the local storage for the formData and displays it
    return Object.keys(loginInfo).map((key) => (
      <div key={key}>
        <strong>{key}:</strong> {loginInfo[key]}
      </div>
    ))
  }

  return (
    <div>
      <img src='/tatem-logo.png' className='w-8 h-8 mb-2 mx-auto' />
      Submitted Info
      {displayLoginInfo()}
    </div>
  )
}


export default Submit
