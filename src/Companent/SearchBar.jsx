import { Search } from '@mui/icons-material';
import { Paper, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate()

  const sebmitForm = (evt) => {
    evt.preventDefault()
    setValue('');
    if(value) {
      navigate(`/search/${value}`)
    }
  }


  return (
    <Paper component={'form'} onSubmit={sebmitForm} sx={{pl: '20px', boxShadow: 'none'}}
    >
      <input className='searchbar-inp' type="text" placeholder='Search...' value={value} onChange={(e) => setValue(e.target.value)} />

      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar