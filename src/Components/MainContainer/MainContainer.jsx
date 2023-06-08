import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HospitalContainer from '../HospitalContainer/HospitalContainer';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// Define the building names for the HospitalContainer components
const buildingNames1 = ['ساختمان امید', 'ساختمان نیما'];
const buildingNames2 = ['ساختمان امید'];

const MainContainer = () => (
    <div>
        {/* Main heading */}
        <h3 className='text-end fw-bold'>لیست تخت ها مجتمع بیمارستانی امام خمینی</h3>

        {/* First HospitalContainer component */}
        <HospitalContainer HospitalName='بیمارستان امام' buildingNames={buildingNames1} />

        {/* Second HospitalContainer component */}
        <HospitalContainer HospitalName='بیمارستان ولیعصر' buildingNames={buildingNames2} />
    </div>
);

export default MainContainer;
