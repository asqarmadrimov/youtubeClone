import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {

  return (
    <Card sx={{ width: '310px', padding: '0', height: '330px' }}>
      <Link to={`/video/${video?.id?.videoId}`}>
        <CardMedia sx={{ height: '150px' }} image={video?.snippet?.thumbnails?.high?.url} title="green iguana" />
      </Link>
      <CardContent>
        <Link to={`/video/${video?.id?.videoId}`}>
          <Typography gutterBottom variant="body2" component="div">
            {moment(video?.snippet?.publishTime).fromNow()}
          </Typography>

          <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
            {video?.snippet?.title.slice(0, 50)}
          </Typography>

          <Typography variant="body2" component="div">
            {video?.snippet?.description.slice(0, 30) || 'There is no comment in this sentence..'}
          </Typography>
        </Link>

        <Link to={`/chanel/${video.snippet.channelId}`}>
          <Stack direction='row' alignItems='center' gap='5px' mt='8px' pt='9px' sx={{ borderTop: '1px solid gray' }}>
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />

            <Typography gutterBottom variant="body2" fontWeight='bold' component="div">
              {video?.snippet?.channelTitle.slice(0, 30)}
              <CheckCircle sx={{ fontSize: '12px', color: 'darkgrey', ml: '5px' }} />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard