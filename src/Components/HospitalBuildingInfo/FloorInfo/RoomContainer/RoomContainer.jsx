import React from 'react';
import health from '../../../../Assets/Icons/health.svg';
import BedContainer from './BedContainer/BedContainer';

const RoomContainer = ({ Room, beds }) => (
    <div className='my-35'>
        <div className='d-flex w-fit align-items-end main-background' style={{ columnGap: '8px', padding: '10px 22px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
            <img src={health} style={{ width: '25px' }} alt="Health Icon" />
            <h4 className='fs-6 m-0'>{Room}</h4>
        </div>

        <div className='main-background p-4 d-flex justify-content-center justify-content-md-start' style={{ gap: '15px', flexWrap: 'wrap' }}>
            {beds.map((bed, index) => (
                <BedContainer key={index} bedNumber={bed.bedNumber} status={bed.status} />
            ))}
        </div>
    </div>
);

export default RoomContainer;
