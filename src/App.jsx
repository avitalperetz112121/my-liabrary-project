import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Book } from './book';

function App() {
const books = [
        {title:'Duplicates', author: 'Yona Sapir', likes: 3, isAvailable: true } ,
         {title:'Michtav Meeliyahu', author: 'Rabbai Desler', likes: 1000, isAvailable: true } ,
        {title:'Harry Potter', author: 'J K Rolling', likes: 50, isAvailable: true }
     ];
const recommended = books.filter(b => b.likes > 100);
 

return (
    
      <div style={{ direction: 'rtl', padding: 20 }}>
      <h1>חנות הספרים</h1>
      
      <h2>כל הספרים</h2>
      {books.map((b, i) => <Book key={b.id} index={i + 1} {...b} />)}

      <h2>ספרים מומלצים</h2>
      {recommended.length > 0 ? (
        recommended.map((b, i) => <Book key={b.id} index={i + 1} {...b} />)
      ) : (
        <p>אין ספרים מומלצים כעת.</p>
      )}
    </div>
    
  )
}

export default App
