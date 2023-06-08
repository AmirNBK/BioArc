import React from 'react';
import SleepIcon from '../../Assets/Icons/SleepIcon';

const HospitalInfoCard = ({ info }) => {
  const colors = ['#FFC684', '#83C4DF', '#E4E4E4'];

  return (
    <div className="px-20 px-md-40 py-10 rounded fw-medium fs-7"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', color: '#A7A8AB', backgroundColor: '#F1F4F5' }}>
      {info?.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          {index % 2 === 0 ? (
            // Rendered when index is even
            <div className="d-flex gap-1">
              <span>{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ) : (
            // Rendered when index is odd
            <div className="d-flex gap-1">
              <SleepIcon color={colors[index % colors.length]} />
              <span>{item.label}:</span>
              <span>{item.value}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HospitalInfoCard;
