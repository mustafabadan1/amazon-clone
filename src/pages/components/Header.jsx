import React from 'react';
import Image from 'next/image';
import { HiSearch, HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';

export default function () {
  return (
    <>
      <header>
        {/* //!Top nav */}

        <div className=' flex items-center bg-amazon_blue p-1 flex-grow py-2'>
          {/* //=left-side */}
          <div className=' mt-2 flex items-center flex-grow sm:flex-grow-0'>
            {/*//* image logo */}
            <Image
              src='https://links.papareact.com/f90'
              width={150}
              height={40}
              objectFit='contain'
              className=' cursor-pointer'
            />
          </div>
          {/*//* Search */}
          <div className='hidden sm:flex h-10 rounded-md items-center flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
            <input
              type='text'
              className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            />
            {/*//* searchIcon */}
            <span className=' h-12 lg:text-lg p-4 '>
              {' '}
              <HiSearch />{' '}
            </span>
          </div>

          {/*//=right-side */}
          <div className=' text-white tracking-wider flex items-center text-xs mx-6 space-x-8 whitespace-nowrap '>
            <div className=' link'>
              <p className=' text-gray-200'>hello babe sougha </p>
              <p className=' font-extrabold md:font-bold md:text-sm'>
                Account & Lists{' '}
              </p>
            </div>

            <div className=' link '>
              <p className=' text-gray-200'>Returns </p>
              <p className='font-extrabold md:font-bold md:text-sm '>
                {' '}
                & Orders{' '}
              </p>
            </div>

            <div className='link relative flex items-center '>
              <span className=' absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold '>
                0
              </span>
              {/*//* shoppingIcon */}
              <HiOutlineShoppingCart className='h-10 w-full ' />
              <p className='  hidden md:inline font-extrabold md:font-bold  md:text-sm mt-2 '>
                Basket
              </p>
            </div>
          </div>
        </div>

        {/*//!Bottom nav */}

        <div className='flex items-center space-x-4 p-[0.4rem] pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className=' link flex items-center '>
            <HiOutlineMenu className='h-6 w-full mr-1' />
            All
          </p>

          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today's Deals</p>

          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Sopper Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
      </header>
    </>
  );
}
