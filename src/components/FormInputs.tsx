import React, { useEffect, useRef } from 'react'
import { FormData, keyDown } from '../types'

interface Props {
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type Form = {
  text: string
  name: string
  ref: React.RefObject<HTMLInputElement>
  type?: string
}

const FormInputs: React.FC<Props> = ({formData, handleInputChange}) => {
  
  const formList: Form[] = [
    {text: 'First Name', name: 'firstName', ref: useRef(null)},
    {text: 'Last Name', name: 'lastName', ref: useRef(null)},
    {text: 'Email', name: 'email', ref: useRef(null)},
    {text: 'Password', name: 'password', ref: useRef(null), type: 'password'}
  ]

  // Handles keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = Number(document.activeElement?.getAttribute('tabIndex'))
      if (e.key === 'ArrowUp' && currentIndex > 0) {
        formList[currentIndex - 1].ref.current?.focus()
      } else if (e.key === 'ArrowDown' && currentIndex < formList.length - 1) {
        formList[currentIndex + 1].ref.current?.focus()
      }
    }

    window.addEventListener(keyDown, handleKeyDown)

    return () => {
      window.removeEventListener(keyDown, handleKeyDown)
    }
  }, [])

  return (
    <div>
      {formList.map((form, index) => (
        <label className='flex flex-col items-start w-full gap-1'>
          <span className='text-xs text-gray-700'>{`${formList[index].text}`}</span>
            <input 
              className='w-full rounded border border-gray-100 px-3 py-1' 
              name={form.name}
              type={form.type} // To account for the password type
              key={index}
              ref={form.ref} 
              value={formData[form.name as keyof FormData]}
              onChange={handleInputChange}
              tabIndex={index}
              required // To make sure each part of the form is filled out
            />
        </label>
      ))}
    </div>
  )
}

export default FormInputs
