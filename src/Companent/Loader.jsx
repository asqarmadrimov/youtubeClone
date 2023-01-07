import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box>
      <Stack direction='row' justifyContent='center' mt='20px'>
        <CircularProgress />
      </Stack>
    </Box>
  )
}

export default Loader