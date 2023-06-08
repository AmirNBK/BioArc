import React from 'react';
import building from '../../Assets/Icons/Hospitalbuilding.svg';

const HospitalBuilding = ({ BuildingName, HospitalName }) => (
    <div>
        <img src={building} style={{ width: '75px' }} alt="Building Icon" /> {/* Rendering the building icon image */}
        <h3 className="fw-medium mt-10">{BuildingName}</h3> {/* Rendering the building name */}
        <h4 style={{ fontSize: '10px' }}>{HospitalName}</h4> {/* Rendering the hospital name */}
    </div>
);

export default HospitalBuilding;
