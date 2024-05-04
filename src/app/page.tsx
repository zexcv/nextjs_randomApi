"use client";

import { useState, FormEvent } from 'react';
import {useRouter} from 'next/navigation'

export default function Home() {
    const [inputValue, setInputValue] = useState("")
    const {push} = useRouter()
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        push(`/prediction/${inputValue}`)
    }

    return (
      <div className='form-div'>
        <h1 className='text-white'>Podaj swoje imię</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Wpisz imię...' 
            onChange={(e)=>setInputValue(e.target.value)} 
            value={inputValue}
            />
            <button type='submit'>Predict data</button>
        </form>
      </div>
    );
  }