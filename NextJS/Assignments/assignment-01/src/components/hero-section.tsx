import Image from 'next/image'
import round01 from "../public/round01.png";
import round02 from '../public/round02.png';
import round03 from '../public/round03.png';
import round04 from '../public/round04.png';

const HeroSection = () => {
  return (
    <div className='w-full  bg-lightblue md:flex justify-center gap-8 py-5 mb-10
    overflow-hidden'>

      <div className='w-full md:w-1/3  flex flex-col justify-center gap-2 px-4 md:px-0 my-6 md:my-0'>
        <h1 className='text-5xl md:text-7xl font-oleo text-primary '>Be comfortable in your skin</h1>
        <p className='text-xl text-bcolor'>How you care for your skin can greatly affect your appearance. Nourish and protect your skin, so you can feel confident and beautiful in your own skin.
        </p>
      </div>

      <div className='w-full md:w-1/2 flex flex-col justify-center relative'>
        <Image
          src={round02}
          alt='round01'
          className='border-2 border-primary border-dashed rounded-full p-2 absolute top-0 -right-10 md:relative md:ml-10 md:right-0 z-10' />

        <Image
          src={round04}
          alt='round01'
          className='border-2 border-primary border-dashed rounded-full p-1 m-5 md:ml-24 z-10 hero-img1' />

        <Image
          src={round03}
          alt='round01'
          className='border-2 border-primary border-dashed rounded-full p-1 ml-20 md:ml-36 -mt-2 z-10 hero-img2' />

        <Image
          src={round01}
          alt='round01'
          className='absolute right-[-200px] border-2 border-primary border-dashed  rounded-full hidden md:block z-1'/>

      </div>
    </div>
  )
}

export default HeroSection