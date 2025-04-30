import { Box, Button, Container, TextField, Typography } from '@mui/material'

import React from 'react'

export default function NewsLetter() {
  return (
    <Box sx={{bgcolor: '#e3f2fd', py: 6}}>
        <Container maxWidth='sm' sx={{textAlign: 'center'}}>
            <Typography variant='h4' fontWeight='bold' mb={2}>عضویت در خبرنامه</Typography>
            <Typography variant='body1' color='text.secondary' mb={4}>ایمیل خود را وارد کنید تا جدیدترین اخبار را دریافت کنید</Typography>
            <Box component='form' sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'},
        gap: 2, justifyContent: 'center'}}>
                <TextField label='ایمیل شما' variant='outlined' size='small' fullWidth/>
                <Button variant='contained' size='large' type='submit'>عضویت</Button>

            </Box>
        </Container>
    </Box>
  )
}
