import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header=()=> {
    let[books,setbooks] = useState([])
    let[searchTemrs,setSearchTerms] = useState('')
    let[sugges,setSugges] = useState([])
    //fetching the api
    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{headers:{ 'Authorization': 'whatever-you-want' }}).then(res=>{setbooks(res.data.books)
    setSugges(res.data.books)}).catch(error=>{
            console.log(error)
        })
        
    },[])
    let handlechange =(e)=>{
        setSearchTerms(e.target.value)
        setSugges(books.filter((el)=>el.title.toLowerCase().includes(searchTemrs.toLowerCase())))
        
    }
  return (
    <div>
    
         <div className='nav'>
        <h1>KALVIUM BOOKS</h1>
        <input  type='text' placeholder='  🔍     Search Books'  className='search' onChange={handlechange} />
        <Link to='/register' className='register'>Register</Link>
      </div>

      <div className='books-container'>
                {sugges.map((book)=>(
                    <div key={book.id} className='books'>
                        <img src={book.imageLinks.smallThumbnail}/>
                        <h3 className='title'>{book.title}</h3>
                        <p className='rating'>⭐️ {book.averageRating}</p>
                        <p className='free'>Free</p>
                    </div>
                ))}

        </div>
    </div>
  )
}

export default Header
      
       
          
         
        
        
         
          
       