import React, {useContext, useState} from 'react';
import fetchQuery from '../../api/fetchApi';
import DartCard from '../../components/Card/DartCard';
import formatDate from '../../format';
// import { DART_CARDS } from '../../DUMMY_DATA';
import Dot from '../../public/svgs/Dot';
import Minus from '../../public/svgs/Minus';
import Plus from '../../public/svgs/Plus';
import { fetchDashboardNotes } from '../../services';
import { CONSTANT_TEXT } from '../../helpers/constant'
import CreateNote from '../../modals/CreateNote';
import { toggleContext } from '../../context/toggleContext';
import EditNote from '../../modals/EditModal';
import DeleteNote from '../../modals/DeleteNote';


const DashboardNote = () => {

  const [currIndx, setCurrIndx] = useState(0);
  const [show, setShow] = useState(false);

  const toggle = useContext(toggleContext);

  const { data, isLoading } = fetchQuery(['notes'], fetchDashboardNotes);
  const cards = data?.data;

  const sliceTextFn = (text) => {
    const sliceText = text;
    return sliceText.slice(CONSTANT_TEXT.START_SLICE, CONSTANT_TEXT.END_SLICE);
  };

  return (
    <>
      {toggle.create && <CreateNote />}
      {toggle.edit && <EditNote />}
      {toggle.delete && <DeleteNote />}
    <div className='bg-dartblue w-full min-h-screen'>
      <div className='flex h-screen space-x-8'>
        <div className='w-356px border-l overflow-scroll h-5/6 border-grayshade bg-white'>
            {isLoading ? CONSTANT_TEXT.LOADING
              : (!cards?.length ? CONSTANT_TEXT.EMPTY_LIST('note')
              : cards?.map((card, index) => (
              <DartCard
                  key={index}
                  title={card?.title}
                  description={sliceTextFn(card?.description)}
                  tag={card?.tag}
                  created_at={formatDate(card?.date)}
                  curIndx={index}
                  show={show}
                  activeIndx={currIndx}
                  clickHandler={() => {
                    setCurrIndx(index)
                    setShow(open => !open)
                  }}
              />
          )))}
        </div>
        <div className='flex w-3/4 h-auto mb-40 mt-5'>
          <div className='bg-white w-full pt-20 pb-5 px-20'>
            {isLoading ? 'Loading...' : (!cards?.length ? CONSTANT_TEXT.NOT_FOUND('Note') :
              <>
                <div className='text-5xl font-roboto'>{cards[currIndx].title}</div>
                <p className='text-sm text-textgray mt-8'>{cards[currIndx].description}</p>
              </>
            )}
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
      </>
  )
}

export default DashboardNote;