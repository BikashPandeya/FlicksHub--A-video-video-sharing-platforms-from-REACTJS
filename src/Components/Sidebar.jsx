import { Stack, Box, IconButton } from "@mui/material"
import { categories } from "../utils/constants"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Check if device is mobile on mount and when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current && isMobile) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Initialize scroll position check
  useEffect(() => {
    if (scrollRef.current && isMobile) {
      handleScroll();
    }
  }, [isMobile]);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%',
      height: { xs: 'auto', md: '95%' }
    }}>
      {/* Left scroll button - only visible on mobile when scrolled */}
      {isMobile && (
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            display: showLeftArrow ? 'flex' : 'none',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            '&:hover': { backgroundColor: '#FC1503' },
            width: 30,
            height: 30,
          }}
        >
          <ChevronLeft />
        </IconButton>
      )}

      <Stack
        direction={isMobile ? "row" : "column"}
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          overflowY: { xs: "hidden", md: "auto" }, 
          overflowX: { xs: "auto", md: "hidden" },
          height: { xs: "auto", md: "100%" },
          flexDirection: { xs: "row", md: "column" },
          
          // Hide scrollbar on all devices
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          },
          
          // Padding adjustments
          padding: { xs: "10px 40px", md: "10px 0" }
        }}
      >
        {categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
              width: isMobile ? "auto" : "100%"
            }}
            key={category.name}
          >
            <span style={{ 
              color: category.name === selectedCategory ? "white" : "red", 
              marginRight: "15px" 
            }}>
              {category.icon}
            </span>
            <span style={{ 
              opacity: category.name === selectedCategory ? "1" : "0.8" 
            }}>
              {category.name}
            </span>
          </button>
        ))}
      </Stack>

      {/* Right scroll button - only visible on mobile */}
      {isMobile && (
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            display: showRightArrow ? 'flex' : 'none',
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            '&:hover': { backgroundColor: '#FC1503' },
            width: 30,
            height: 30,
          }}
        >
          <ChevronRight />
        </IconButton>
      )}
    </Box>
  );
}

export default Sidebar
