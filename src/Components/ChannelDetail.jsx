import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import {useState , useEffect} from "react"
import { Videos , ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {
  const {id} = useParams()
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(ChannelDetail , videos)
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then((data) => setVideos(data.items))
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(0,238,249,1) 0%, rgb(231, 246, 19) 100%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "300px" 
        }}/>
        <ChannelCard channelDetail={ChannelDetail} marginTop="-110px"/>
      </Box>
      <Box p={2} display="flex">
        <Box sx={{mr: {sm: "100px"}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
