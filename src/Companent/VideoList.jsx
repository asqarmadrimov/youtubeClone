import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChanelCard from './ChanelCard';
import Loader from './Loader';

const VideoList = ({ videos }) => {
  if(!videos.length) return <Loader/>

  return (
    <Stack width={'100%'} direction='row' flexWrap={'wrap'} justifyContent='center' gap={2}>

      {videos.map(video => (
      <Box key={video.id.videoId}>
        {video.id.videoId && <VideoCard video={video}/>}
        {video.id.channelId && <ChanelCard video={video}/>}
      </Box>
    ))}

    </Stack>
  )
}

export default VideoList