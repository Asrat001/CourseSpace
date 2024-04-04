import { Container, Typography } from '@mui/material'
import React from 'react'


const Page = ()=> {
  return (
    <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
        <Typography sx={{font:'caption', fontSize:'25px', fontWeight:'bold'}}>
        the Page you are looking for doesn't exist
        </Typography>
    </Container>
  )
}



export default Page