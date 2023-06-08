import React from 'react';
import HospitalInfoCard from '../../HospitalInfoCard/HospitalInfoCard';
import RoomContainer from './RoomContainer/RoomContainer';

const FloorInfo = ({ HospitalName, roomNumbers, BuildingName }) => {
    // Function to generate random beds with statuses
    const generateRandomBeds = (count) => {
        // Array of possible bed statuses
        const bedStatuses = ['normal', 'normal', 'normal', 'warning', 'fulled', 'fulled'];

        // Generate beds using count and random status selection
        return Array.from({ length: count }, (_, i) => {
            const randomStatusIndex = Math.floor(Math.random() * bedStatuses.length);
            return { bedNumber: `A${i + 1}`, status: bedStatuses[randomStatusIndex] };
        });
    };

    // Function to get beds for a specific room
    const getRoomBeds = (roomNumber) => {
        // Generate a random bed count for the room
        const bedCount = Math.floor(Math.random() * 6) + 1;

        // Generate random beds for the room
        return generateRandomBeds(bedCount);
    };

    // Function to render RoomContainers for each room
    const renderRoomContainers = () => {
        return roomNumbers.map((roomNumber, index) => {
            // Get beds for the current room
            const beds = getRoomBeds(roomNumber);

            // Sort beds based on status order: normal, warning, fulled
            beds.sort((a, b) => ['normal', 'warning', 'fulled'].indexOf(a.status) - ['normal', 'warning', 'fulled'].indexOf(b.status));

            // Render RoomContainer component for the room with its beds
            return <RoomContainer key={index} Room={`اتاق ${roomNumber}`} beds={beds} />;
        });
    };

    // Information data for the HospitalInfoCard component
    const infoData = [
        { label: 'تعداد کل اتاق ها', value: `${roomNumbers.length} عدد` },
        { label: 'قابل رزرو', value: '32 عدد' },
        { label: 'تعداد کل تخت ها', value: ` عدد` },
        { label: 'غیر قابل رزرو', value: '12 عدد' },
    ];

    return (
        <div className='rtl'>
            <div className='d-flex flex-column flex-lg-row align-items-center align-items-lg-baseline justify-content-between'>
                <h4 className='text-end mt-35'>لیست اتاق های {HospitalName} {BuildingName}:</h4>
                <HospitalInfoCard info={infoData} />
            </div>
            {renderRoomContainers()}
        </div>
    );
};

export default FloorInfo;
