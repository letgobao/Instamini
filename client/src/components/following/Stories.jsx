import React, {useState} from 'react'
import {persons} from '../../data/person'
import Avatar from '@mui/material/Avatar';
const Stories = () => {
  const [displayperson, setDisplayperson] = useState(persons.slice(0,6))
  return (
    <div className='Stories'>
      {displayperson.map((person, index) => {
        return(
          <div className='following-card' key={index}>
            <Avatar alt={person.name} src={person.img}/>
            <span>{person.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Stories
