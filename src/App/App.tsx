import { FormEvent, useState } from 'react';
import './App.css'
import FormInputs from '../components/FormInputs';
import { FormData, localStorageKey } from '../types';

function App() {

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Saves to localStorage: implement form data saving to local storage
    localStorage.setItem(localStorageKey, JSON.stringify(formData))
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })

    // Once data is submitted, the page is redirected
    window.location.href = 'submitted_page.html'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className='mx-auto max-w-screen-lg min-h-screen flex flex-col md:flex-row items-center justify-center'>
      <div>
        <img src='/tatem-logo.png' className='w-8 h-8 mb-2 mx-auto' />
        <h1 className='text-3xl text-center mb-4'>Tatem Inputs</h1>
        <div className='my-3'>
          Submitted form inputs:
          {/* The submitted inputs will display on /submitted_page */}
        </div>
      </div>
      <form className="flex mx-auto max-w-2xl flex-col items-center gap-3" onSubmit={handleSubmit}>
        <FormInputs formData={formData} handleInputChange={handleInputChange} />
        <button className='mt-2 border rounded px-2 py-0.5 hover:cursor-pointer border-black hover:bg-black hover:text-white duration-150' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
