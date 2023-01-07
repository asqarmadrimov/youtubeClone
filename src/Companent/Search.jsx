import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiKey } from '../Utils/ApiServis';
import VideoList from './VideoList';

const Search = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      try{
        const res = await ApiKey.fetchApi(`search?part=snippet&q=${id}`);
        setVideos(res.items)
      } catch(err){
        console.log(err)
      }
    }

    getRes()
  }, [id])

  return (
    <Box p={2}>
      <Box pb={2}>
        <Link to='/' className='link'> Home </Link>
      </Box>
        <VideoList videos={videos}/>
    </Box>
  )
}

export default Search