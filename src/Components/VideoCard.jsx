import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
//   console.log(videoId, snippet);
  return (
    <Card sx={{
      width: { xs: "100%", sm: "358px", md: "280px" }, 
      boxShadow: "none", 
      borderRadius: 0,
      margin: { xs: "0 auto", sm: "0 auto" }, // Center cards on all screen sizes
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minWidth: { xs: "300px", sm: "358px", md: "280px" }, // Ensure minimum width on mobile
      maxWidth: { xs: "95%", sm: "358px", md: "280px" }, // Maximum width on mobile
    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ width: "100%" }}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ 
            width: "100%", // Full width on all devices
            height: { xs: 160, sm: 180 }, // Adjust height for mobile
            objectFit: "cover"
          }}
        />
        {/*here we are using the thumbnail url from the snippet . ? is used to check if the videoId is present or not and  avioding the error if found*/}
      </Link>
      <CardContent sx={{ 
        backgroundColor: "#1e1e1e", 
        height: { xs: "110px", sm: "106px" }, // Slightly more height on mobile
        padding: { xs: "8px", sm: "16px" },
        width: "100%", // Ensure full width
      }}>
        <Box sx={{ width: "100%" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ width: "100%", display: "block" }}>
            <Typography 
              variant="subtitle1" 
              fontWeight={"bold"} 
              color={"#fff"}
              sx={{
                width: "100%",
                minHeight: { xs: "48px", sm: "44px" }, // More height on mobile for better readability
                fontSize: { xs: "14px", sm: "16px" }, // Smaller font on mobile
                lineHeight: { xs: "1.3", sm: "1.4" }, // Adjusted line height for mobile
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box"
              }}
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ width: "100%" }}>
            <Typography 
              variant="subtitle2" 
              fontWeight={"bold"} 
              color={"gray"}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "12px", sm: "14px" }, // Smaller font on mobile
                mt: { xs: "4px", sm: "8px" } // Less margin on mobile
              }}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{fontSize: { xs: 10, sm: 12 }, color: "gray", ml: "5px"}}/>
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
