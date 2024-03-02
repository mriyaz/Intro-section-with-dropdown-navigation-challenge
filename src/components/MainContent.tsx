import React from 'react';
import imgHeroMobile from '../images/image-hero-mobile.png';
import imgHeroDesktop from '../images/image-hero-desktop.png';
import imgDatabix from '../images/client-databiz.svg';
import imgAudiophile from '../images/client-audiophile.svg';
import imgMeet from '../images/client-meet.svg';
import imgMaker from '../images/client-maker.svg';

const MainContent = () => {
  return (
    <div className='space-y-10 md:flex md:flex-row-reverse md:pt-10 md:gap-12 md:px-14'>
    
      <picture className="md:w-[80%]">
        <source media="(max-width: 767px)" srcSet={imgHeroMobile} />
        <source media="(min-width: 768px) " srcSet={imgHeroDesktop} />
        <img src={imgHeroMobile} alt="Hero Image Mobile" />
      </picture>


      <div className='space-y-10 text-center md:text-left md:space-y-28 md:px-10 md:pt-10'>

        <div className="space-y-5 md:space-y-8 md:px-2">
          <h1 className='text-4xl font-extrabold md:text-7xl'>Make remote work</h1>
          <p className='text-gray-500 px-2'>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.

          </p>
          <button className='bg-black text-white px-6 py-3 rounded-xl'>
            Learn more
          </button>
        </div>

        {/* Show the clients here */}
        <div className='flex justify-between items-center'>
          <img src={imgDatabix} alt=" Databix client image" />
          <img src={imgAudiophile} alt="Audiophile client image" />
          <img src={imgMeet} alt="Meet client image" />
          <img src={imgMaker} alt="Maker client image" />
        </div>
      </div>

    </div>
  )
}

export default MainContent