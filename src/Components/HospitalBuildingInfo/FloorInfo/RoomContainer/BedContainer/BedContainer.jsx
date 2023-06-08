import React from 'react';
import SleepIcon from '../../../../../Assets/Icons/SleepIcon';
import Button from '../../../../../CommonComponents/Button/Button';

const BedContainer = ({ bedNumber, status }) => {
    const color = status === 'normal' ? '#83C4DF' : status === 'warning' ? '#FFC684' : status === 'fulled' ? '#E4E4E4' : '';

    return (
        <div className='bg-white w-fit py-2 px-4'>
            <div className='d-flex justify-content-center' style={{ columnGap: '15px' }}>
                <SleepIcon width='30px' color={color} />
                <h4 style={{ fontSize: '14px', color: status === 'fulled' && '#E4E4E4' }}>تخت 1</h4>
            </div>
            <div style={{ color: status === 'fulled' && '#E4E4E4' }}>
                شماره تخت: {bedNumber}
            </div>
            <div className='d-flex flex-column my-2' style={{ rowGap: '10px' }}>
                <Button text={'انتخاب تخت'} backgroundColor={status !== 'normal' ? '#E4E4E4' : '#36459B'} />
                <button type="button" className="btn btn-outline-primary">مشاهده بیشتر</button>
            </div>
        </div>
    );
};

export default BedContainer;
