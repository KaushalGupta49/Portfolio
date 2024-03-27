'use client';

import Image from 'next/image';

import {useState} from 'react';
import Modal from '@mui/material/Modal';

import Carousel from '@/components/Carousel';

export default function BasicModalCarousel(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='md:w-[48%] lg:w-[32%]'>
      <button
        onClick={handleOpen}
        className='rounded-md p-1 duration-[600ms] hover:bg-blue-500/50'>
        <Image src={props.certificate[0].img} alt={props.certificate[0].url} />
      </button>
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
