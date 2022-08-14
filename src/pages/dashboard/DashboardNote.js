import React, {useState} from 'react';
import DartCard from '../../components/Card/DartCard';
import { DART_CARDS } from '../../DUMMY_DATA';
import Dot from '../../public/svgs/Dot';
import Minus from '../../public/svgs/Minus';
import Plus from '../../public/svgs/Plus';

const DashboardNote = () => {

  const [currIndx, setCurrIndx] = useState(0);
  const [ active, setActive] = useState(1)

  const START_SLICE = 0;
  const END_SLICE = 100;

  const sliceTextFn = (text) => {
    const sliceText = text;
    return sliceText.slice(START_SLICE, END_SLICE);
  };


  return (
    <div className='bg-dartblue w-full min-h-screen'>
      <div className='flex h-screen space-x-8'>
        <div className='w-356px border-l overflow-scroll h-5/6 border-grayshade bg-white'>
          {DART_CARDS.map((card, index) => (
            <DartCard
              key={card.id}
              title={card.title}
              description={sliceTextFn(card.description)}
              tag={card.tag}
              created_at={card.created_at}
              curIndx={index}
              active={active}
              clickHandler={() => {
                setCurrIndx(index)
                setActive(card.id)
              }}
            />
          ))}
        </div>
        <div className='flex w-3/4 h-auto mb-40 mt-5'>
          <div className='bg-white w-full pt-20 pb-5 px-20'>
            <div className='text-5xl font-roboto'>{DART_CARDS[currIndx].title}</div>
            <p className='text-sm text-textgray mt-8'>{DART_CARDS[currIndx].description}</p>
          </div>
          <div className='w-36 px-6'>
            <div className='bg-white shadow-baseshadow w-10 h-10 flex justify-center items-center rounded-full cursor-pointer'>
              <Dot />
            </div>
            <div className='mt-4'>
              <div className='bg-white h-10 w-10 rounded-tr-full rounded-tl-full flex justify-center items-center cursor-pointer'>
                <Plus color='#777777' />
              </div>
              <div className='bg-white h-10 w-10 rounded-br-full border-t rounded-bl-full flex justify-center items-center cursor-pointer'>
                <Minus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNote;