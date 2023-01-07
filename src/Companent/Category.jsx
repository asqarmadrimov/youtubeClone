import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../Utils/constants';

const Category = ({ hendelTextCategory, textCategory }) => {
  return (
    <Stack direction='row' sx={{ overflowX: 'scroll' }}>
      {categories.map(item => (
        <button
          className='cotegory-btn'
          key={item.name}
          onClick={() => (hendelTextCategory(item.name))}
          style={{
            backgroundColor: item.name === textCategory && 'white',
            color: item.name === textCategory && 'brown',
          }}
        >
          <span style={{ marginRight: '6px' }}>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))
      }
    </Stack >
  )
}

export default Category