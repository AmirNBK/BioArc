import React from 'react';
import HospitalInfoCard from '../HospitalInfoCard/HospitalInfoCard';
import HospitalBuilding from '../HospitalBuilding/HospitalBuilding';
import HospitalBuildingInfo from '../HospitalBuildingInfo/HospitalBuildingInfo';

const HospitalContainer = ({ HospitalName, buildingNames }) => {
    // Information data for the HospitalInfoCard component
    const infoData = [
        { label: 'تعداد ساختمان ها', value: `${buildingNames.length} عدد` },
        { label: 'قابل رزرو', value: '32 عدد' },
        { label: 'تعداد کل اتاق ها', value: '18 عدد' },
        { label: 'غیر قابل رزرو', value: '12 عدد' },
        { label: 'تعداد کل تخت ها', value: '110 عدد' },
        { label: 'پر', value: '58 عدد' },
    ];

    // Labels for the HospitalBuildingInfo tabs
    const tabLabels = [
        'طبقه دوم بخش ارتوپدی',
        'طبقه دوم بخش کودکان',
        'طبقه دوم بخش روماتولوژِی',
        'طبقه اول بخش ارتوپدی',
        'طبقه اول بخش روماتولوژی',
    ];

    return (
        <div className='mt-50 main-border pb-70 main-radius' style={{ borderTop: 'none' }}>
            {/* Hospital name section */}
            <div className='text-end' style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-21px)' }}>
                <div style={{ borderBottom: '1px solid #DDDDDD', flex: '0.03' }}></div>
                <h4 className='mx-25 fw-semibold'>{HospitalName}</h4>
                <div style={{ borderBottom: '1px solid #DDDDDD', flex: '1' }}></div>
            </div>

            <div className='px-30'>
                <div className='d-flex flex-column flex-lg-row align-items-lg-baseline justify-content-between'>
                    {/* Section title for the list of buildings */}
                    <h4 className='text-end mt-35 fw-semibold'>لیست ساختمان های {HospitalName}:</h4>

                    {/* HospitalInfoCard component */}
                    <HospitalInfoCard info={infoData} />
                </div>

                {/* Loop through buildingNames and render HospitalBuilding and HospitalBuildingInfo */}
                {buildingNames.map((buildingName, index) => (
                    <React.Fragment key={index}>
                        {/* HospitalBuilding component */}
                        <HospitalBuilding BuildingName={buildingName} HospitalName={HospitalName} />

                        {/* HospitalBuildingInfo component */}
                        <HospitalBuildingInfo tabLabels={tabLabels} BuildingName={buildingName} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default HospitalContainer;
