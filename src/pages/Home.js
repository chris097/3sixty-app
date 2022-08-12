import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card/Card';
import DotSquare from '../public/svgs/DotSquare';
import img1 from '../public/images/img1.png';
import img2 from '../public/images/img2.png';
import img3 from '../public/images/img3.png';
import { TRACK_INFO } from '../DUMMY_DATA';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header /> 
      <div className="px-14 flex justify-between">
        <div className='w-2/3'>
          <div className='w-full mt-20 font-sans text-5xl font-semibold' style={{ lineHeight: "65.37px" }}>
            You can’t really manage time, but you can take small steps that counts on a long run.
          </div>
          <div className='mt-10'>
            {TRACK_INFO.map((info, index) => (
              <div key={index} className="flex space-x-4 font-sans text-base mt-3 items-center">
                <span>{info.icon}</span>
                <span>{info.title}</span>
              </div>
            ))}
            <button className='mt-14 bg-primaryblue text-white w-177px h-14 rounded-full'>Get Started</button>
          </div>
        </div>
        <div className='mt-8 relative w-full ml-32'>
          <div className='mx-auto w-full flex justify-center'>
            <Card img={img1} title='Track your TODOS status' />
          </div>
          <div className='flex justify-between'>
            <div className='flex mt-10'>
              <Card img={img2} title='Jot down reusable code snippets' />
            </div>
            <div className=' flex flex-col mt-16'>
              <div className='z-50 flex flex-col-reverse'>
                <DotSquare top='-mt-28' left='-ml-6' mg='-mt-2' />
                <div className='w-237px h-259px bg-white z-50 shadow-baseshadow'>
                  <div className='h-195px w-full border'>
                    <img src={img3} alt="banner_image" />
                  </div>
                  <div className='flex items-center justify-center h-16 text-sm text-primarygray'>
                    Jot down your daily activities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;