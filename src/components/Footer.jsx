import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';
import { fetchSocialLinks } from '../redux/socialLinks/socialLinksSlice';

const iconMap = {
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
};
export default function Footer() {
    const dispatch = useDispatch();
    const socialLinks = useSelector(state=>
        state.socialLinks.links);

        useEffect(()=>{
            dispatch(fetchSocialLinks())
        }, [dispatch])
  return (
    <Box component="footer" sx={{backgroundColor: '#f5f5f5', py: 3, mt: 5}}>
        <Container maxWidth='lg'>
            <Stack direction='row' spacing={2}
            justifyContent='center' alignItems='center'>
                {Array.isArray(socialLinks) && socialLinks.map((link)=>{
                    const IconComponent = iconMap[link.platform.toLowerCase()];
                    return(
                        <IconButton key={link.platform} href={link.url} target='_blank'>{IconComponent && <IconComponent/>}</IconButton>
                    )
                })}
            </Stack>
            <Typography variant='body2' color='textSecondary'
            align='center' mt={2}>
                ©{new Date().getFullYear()}
                تمامی حقوق متعلق است به وبسایت خر
            </Typography>
        </Container>

    </Box>

  )
}
