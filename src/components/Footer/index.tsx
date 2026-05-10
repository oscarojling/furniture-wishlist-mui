import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py:4}}>
      <Typography variant='body2' color='text.secondary'>
        Made with MUI
      </Typography>
    </Box>
  )
}

export default Footer