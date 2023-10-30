import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Route from '../components/Route.ts'
import Submit from '../Submit/Submit.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path="/">
      <App />
    </Route>
    <Route path="/submitted">
      <Submit />
    </Route>
  </React.StrictMode>,
)
