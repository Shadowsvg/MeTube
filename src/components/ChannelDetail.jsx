import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../util/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
  })

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{
            // background: 'rgb(63,94,251)',
            background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(255,59,76,1) 100%)',
            height: '300px',
            zIndex: 10
          }}  
        />
        <ChannelCard channelDetail={channelDetail} marginTop= '-110px' />
      </Box>
      <Box>
        <Box display='flex' p='2'>
          <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail