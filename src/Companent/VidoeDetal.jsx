import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { ApiKey } from '../Utils/ApiServis';
import Loader from './Loader';
import VideoList from './VideoList';

const VidoeDetal = () => {
  const { id } = useParams();
  const [videoDetal, setVideoDetal] = useState(null);
  const [similarVideo, setSimilarVideo] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      try {
        const res = await ApiKey.fetchApi(`videos?part=sippet,statistics&id=${id}`)
        setVideoDetal(res.items[0]);

        const similarData = await ApiKey.fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setSimilarVideo(similarData.items)
      } catch (err) {
        console.log(err);
      }
    }
    getRes()
  }, [id]);

  if (!videoDetal?.snippet) return <Loader />

  return (
    <Box minHeight={'60vh'} p={1} m={2}>
      <Box className='playr-content' display='flex' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box className='playr-box' width={{ xs: '100%', md: '75%' }}>
          <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls />
          {videoDetal?.snippet?.tags.slice(0, 8).map((item, index) => (
            <Chip label={item} key={index} deleteIcon={<Tag />} onDelete={() => { }} variant='outlined' sx={{ marginTop: '10px', cursor: 'pointer', ml: "10px" }} />
          ))}
          <Typography variant='h5' p={2} fontWeight={'bold'} >
            {videoDetal?.snippet?.title}
          </Typography>

          <Typography variant='subtitle2' pt={0} p={2} m={0} sx={{ opacity: '.7' }}>
            {videoDetal?.snippet?.description.slice(0, 500)}
          </Typography>

          <Stack direction={'row'} py={2} px={2} alignItems='center' gap="15px">
            <Stack direction={'row'} alignItems='center' gap='5px' sx={{ opacity: '0.7' }}>
              <Visibility />
              {parseInt(videoDetal?.statistics?.viewCount).toLocaleString()} views
            </Stack>

            <Stack direction={'row'} alignItems='center' gap='5px' sx={{ opacity: '0.7' }}>
              <FavoriteOutlined />
              {parseInt(videoDetal?.statistics?.likeCount).toLocaleString()} likes
            </Stack>

            <Stack direction={'row'} alignItems='center' gap='5px' sx={{ opacity: '0.7' }}>
              <MarkChatRead />
              {parseInt(videoDetal?.statistics?.commentCount).toLocaleString()} comments
            </Stack>
          </Stack>

          <Link to={`/chanel/${videoDetal.snippet.channelId}`}>
            <Stack direction='row'>
              <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
                <Avatar src={videoDetal?.snippet?.thumbnails?.default?.url} alt={videoDetal?.snippet?.channelTitle} />

                <Typography variant='subtitle2' color='gray' gap="5px" alignItems='center'>
                  {videoDetal?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '15px' }} />
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Box>
        <Box width={{ xs: '100%', md: '25%' }} px='2' py={{ md: 0, xs: 3 }} justifyContent='center' alignItems={'center'} overflow='scroll' maxHeight='130vh'>
          <VideoList videos={similarVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VidoeDetal