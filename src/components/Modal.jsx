'use client';

import Image from 'next/image';

import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Carousel from '@/components/Carousel';

export default function BasicModalCarousel(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='md:w-1/2 lg:w-1/3'>
      <Button onClick={handleOpen} className='hover:bg-blue-500/50'>
        <Image src={props.certificate[0].img} alt={props.certificate[0].url} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          position: 'absolute',
          top: '20%',
        }}>
        <>
          <Carousel certificates={props.certificate} mousewheel={true} />
          <h1 className='text-semibold my-4 text-center text-2xl text-white'>
            {props.name}
          </h1>
        </>
      </Modal>
    </div>
  );
}
