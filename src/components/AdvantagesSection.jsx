import { Card, CardContent, Grid, Typography } from '@mui/material'
import {FaPhoneAlt, FaShippingFast, FaUndo} from 'react-icons/fa'

import React from 'react'

export default function AdvantagesSection() {
  return (
    <section style={{padding: '50px 20px',
        backgroundColor: '#f8f8f8'
    }}>
        <Typography variant='h4' align='center' gutterBottom>مزایای فروشگاه</Typography>
        <Grid container spacing={4} justifyContent='center'>
            <Grid item>
                <Card elevation={3} style={{textAlign: 'center'}}>
                    <CardContent>
                        <FaShippingFast size={50} color='inherit'/>
                        <Typography variant='h6' gutterBottom>ارسال رایگان</Typography>
                        <Typography variant='body2' color='textSecondary'>
                            ارسال رایگان برای سفارشات بالای 100 تومان
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card elevation={3} style={{textAlign: 'center'}}>
                    <CardContent>
                        <FaPhoneAlt size={50} color='inherit'/>
                        <Typography variant='h6' gutterBottom>پشتیبانی 24/7</Typography>
                        <Typography variant='body2' color='textSecondary'>
پشتیبانی از طریق تلفن و چت آنلاین به صورت 24 ساعته                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card elevation={3} style={{textAlign: 'center'}}>
                    <CardContent>
                        <FaUndo size={50} color='inherit'/>
                        <Typography variant='h6' gutterBottom>بازگشت وجه 30 روزه</Typography>
                        <Typography variant='body2' color='textSecondary'>
در صورت نارضایتی بازگشت وجه 30 روزه                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </section>
  )
}
