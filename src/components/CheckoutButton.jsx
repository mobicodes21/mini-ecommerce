import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, CircularProgress, Typography } from '@mui/material';
{/* CheckoutButton component:
 - Renders a button to confirm and complete the order
 - On click, opens a loading dialog and after 2.5 seconds redirects to the payment gateway
 - The dialog shows a spinner and a message indicating the redirect is in progress */}
const CheckoutButton = () => {
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    setOpen(true);
    setTimeout(() => {
      window.location.href = 'https://your-payment-gateway.com';
    }, 2500);
  };

  return (
    <>
      <Button
        variant='contained'
        sx={{ backgroundColor: 'secondary.main', color: '#fff', mt: 2, mr: 1 }}
        onClick={handleCheckout}
      >
        تایید و تکمیل سفارش
      </Button>

      <Dialog open={open}>
        <DialogTitle>در حال انتقال...</DialogTitle>
        <DialogContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress color='secondary' />
          <Typography>در حال انتقال به درگاه پرداخت، لطفاً صبور باشید.</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutButton;
