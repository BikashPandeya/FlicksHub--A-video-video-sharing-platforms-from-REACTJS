import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        console.log("API Response:", data);
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching search results:", err);
        setError("Failed to load search results. Please try again later.");
        setLoading(false);
      });
  }, [searchTerm]);

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
      <Typography color="error" variant="h5">{error}</Typography>
    </Box>
  );

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results For: <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>

      {videos.length === 0 ? (
        <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
          No results found for "{searchTerm}". Try a different search term.
        </Typography>
      ) : (
        <Videos videos={videos} />
      )}
    </Box>
  );
};

export default SearchFeed;
