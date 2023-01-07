import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import { ApiKey } from '../Utils/ApiServis';
import ChanelCard from './ChanelCard';
import VideoList from './VideoList';

const Chanel = () => {
  const {id} = useParams();
  const [chanelDetail, setChanelDetail] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const resData = async () => {
      try {
        const dataChanelDetail = await ApiKey.fetchApi(`channels?part=snippet&id=${id}`);
        setChanelDetail(dataChanelDetail.items[0]);

        const dataVideos = await ApiKey.fetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(dataVideos.items);
      } catch(err) {
        console.log(err)
      }
    }

    resData();
  }, [id]);
  console.log(videos)
  
  return (
    <Box minHeight='95vh' mt='10vh'>
      <Box>
      <Box width={"100%"} height='400px' zIndex={'10'} sx={{backgroundImage: `url(${chanelDetail?.brandingSettings?.image?.bannerExternalUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}} />
        
        <ChanelCard video={chanelDetail} marginTop={'-200px'}/> 
      </Box>

      <Container maxWidth="90%">
        <VideoList videos={videos}/> 
      </Container>
    </Box>
  )
}

export default Chanel