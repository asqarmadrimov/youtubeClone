import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{p: '8px', background: 'darkcyan'}}>
      <Link to='/' style={{textDecoration: 'none', color: 'white', fontSize: '25px'}}>
        <span>M <span style={{color: 'brown', fontSize: '30px', marginLeft: '-15px'}}>A</span></span>
      </Link>

      <SearchBar />

      <Box />
    </Stack>
  )
}

export default Navbar