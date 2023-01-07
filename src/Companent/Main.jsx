import { Container, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { ApiKey } from '../Utils/ApiServis'
import Category from './Category'
import VideoList from './VideoList'

const Main = () => {
  const [textCategory, setTextCategory] = useState('New');
  const [videos, setVideos] = useState([])

  const hendelTextCategory = (text) => setTextCategory(text);

  useEffect(() => {
    const getRes = async () => {
      try{
        const res = await ApiKey.fetchApi(`search?part=snippet&q=${textCategory}`)
        setVideos(res.items)
      } catch(err) {
        console.log(err)
      }
    }
    getRes()
  }, [textCategory]);

  return (
    <Stack>
      <Category hendelTextCategory={hendelTextCategory} textCategory={textCategory}/>
      <Box p='2' sx={{height: '85vh'}}>
        <Container maxWidth='85%'>
          <Typography variant='h4' fontWeight='bold' mt='5px' sx={{color: 'teal'}}>
            {textCategory} <span style={{color: 'brown'}}>Video</span>
          </Typography>
          <VideoList videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main