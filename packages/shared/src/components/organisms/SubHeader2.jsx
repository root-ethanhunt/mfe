// CategorySection.jsx
import React ,{useState}from 'react';
import { Box, Grid, Typography, IconButton , Paper, Button, } from '@mui/material';
import { styled } from '@mui/system';
// import { makeStyles } from '@mui/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Grocery', icon: '🥦' },
  { name: 'Mobiles', icon: '📱' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Home & Furniture', icon: '🛋️' },
  { name: 'Appliances', icon: '🔌' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Beauty, Toys & More', icon: '🧸' },
  { name: 'Two Wheelers', icon: '🏍️' },
];

const banners = [
  {
    image: 'https://via.placeholder.com/1200x400?text=Banner+1',
    alt: 'Banner 1',
  },
  {
    image: 'https://via.placeholder.com/1200x400?text=Banner+2',
    alt: 'Banner 2',
  },
];

const CategoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.2s',
  // '&:hover': {
  //   backgroundColor: theme.palette.action.hover,
  //   borderRadius: theme.shape.borderRadius,
  //   transform: 'scale(1.05)',
  // },
}));

const images = [
  'https://api.escuelajs.co/api/v1/files/dc70.jpg',
  'https://i.imgur.com/QkIa5tT.jpeg',
  'https://api.escuelajs.co/api/v1/files/dc70.jpg',
];

// const useStyles = makeStyles((theme) => ({
//   banner: {
//     position: 'relative',
//     height: '300px',
//     overflow: 'hidden',
//     marginBottom: theme.spacing(2),
//   },
//   imageContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     transition: 'transform 0.5s ease',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   content: {
//     position: 'absolute',
//     bottom: theme.spacing(4),
//     left: theme.spacing(4),
//     color: '#fff',
//     zIndex: 1,
//   },
// }));

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: '#ccc',
  margin: '0 5px',
  cursor: 'pointer',
};

const activeDotStyle = {
  ...dotStyle,
  background: '#333',
};

const dotContainerStyle = {
  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
};

const CategorySection = () => {
  // const classes = useStyles();
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const bannerStyle = {
    position: 'relative',
    height: '300px',
    overflow: 'hidden',
    marginBottom: '16px',
  };
  
  const imageContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease',
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  
  const contentStyle = {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: '#fff',
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-around" padding={2}>
        {categories.map((category, index) => (
          <CategoryBox key={index}>
            <Typography variant="h6">{category.icon}</Typography>
            <Typography variant="body2">{category.name}</Typography>
          </CategoryBox>
        ))}
      </Box>

      <Box position="relative" marginTop={2}>
        {/* <Slider ref={sliderRef} {...settings}> */}
          {/* {banners.map((banner, index) => (
            <img
              key={index}
              src={banner.image}
              alt={banner.alt}
              style={{ width: '100%', borderRadius: 8 }}
            />
          ))} */}

        <Paper style={bannerStyle}>
      <div style={{ ...imageContainerStyle, transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} style={imageStyle} />
        ))}
      </div>
      <div style={dotContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            style={index === activeIndex ? activeDotStyle : dotStyle}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </Paper>
      </Box>
    </Box>
  );
};

export default CategorySection;
