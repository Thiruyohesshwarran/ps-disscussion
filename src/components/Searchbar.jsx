import React,{useState} from 'react'
import './Searchbar.css'

export const Searchbar = () => {
    // const [input, setInput] = useState("");
  

    return (
    <div className='search'>
      <form>
        <input placeholder='Type to Search'/>
        <button className='searchbutton'>Search</button>
      </form>
    </div>
  )
}

