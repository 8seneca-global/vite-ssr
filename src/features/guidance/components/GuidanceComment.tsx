import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import AvatarIcon from '../../../assets/images/Avatar.png'

export const GuidanceComment = () => {
  const guidanceComments = [
    {
      name: 'Courtney Henry',
      position: 'Marketing Coordinator',
      avatar: AvatarIcon,
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    },
    {
      name: 'Bill Gate',
      position: 'CEO of Microsoft',
      avatar: AvatarIcon,
      comment: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    },
    {
      name: 'Steve Jobs',
      position: 'Founder of Apple',
      avatar: AvatarIcon,
      comment: 'The people who are crazy enough to think they can change the world are the ones who do.',
    },
  ]
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = guidanceComments.length
  const handleNextSlide = () => {
    setActiveSlide(prevSlide => (prevSlide + 1) % totalSlides)
  }
  const handleBackSlide = () => {
    if (activeSlide == 0) {
      setActiveSlide(totalSlides)
    }
    setActiveSlide(prevSlide => (prevSlide - 1) % totalSlides)
  }
  return (
    <>
      <Typography variant="h1" paddingTop="100px">
        What Our Clients Says
      </Typography>
      <Grid container paddingTop="70px" paddingBottom="100px">
        <Grid item xs={3}>
          <IconButton onClick={handleBackSlide}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Box>
            <AnimatePresence mode="wait">
              <motion.div key={activeSlide} transition={{ duration: 0.5 }}>
                <Typography fontWeight={400} fontSize="14px" color="#181E54">
                  {guidanceComments[activeSlide].comment}
                </Typography>
                <Box display="flex" justifyContent="center" paddingTop="50px">
                  <Box component="img" width="50px" height="50px" src={guidanceComments[activeSlide].avatar} />
                  <Box component="div" textAlign="left" paddingLeft="20px">
                    <Typography color="#424242" fontWeight="500" fontSize="20px">
                      {guidanceComments[activeSlide].name}
                    </Typography>
                    <Typography variant="body2" fontSize="14px" paddingTop="5px">
                      {guidanceComments[activeSlide].position}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <IconButton onClick={handleNextSlide}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
