import React from 'react';
import { render, screen } from '@testing-library/react';
import FloorInfo from './FloorInfo';

describe('FloorInfo', () => {
    test('renders the room containers with correct data', () => {
        const HospitalName = 'Hospital ABC';
        const roomNumbers = [1, 2, 3];
        const BuildingName = 'Building XYZ';

        render(
            <FloorInfo
                HospitalName={HospitalName}
                roomNumbers={roomNumbers}
                BuildingName={BuildingName}
            />
        );

        // Check if the header is rendered correctly
        const headerElement = screen.getByText(`لیست اتاق های ${HospitalName} ${BuildingName}:`);
        expect(headerElement).toBeInTheDocument();

        // Check if the room containers are rendered correctly
        roomNumbers.forEach((roomNumber) => {
            const roomContainerElement = screen.getByText(`اتاق ${roomNumber}`);
            expect(roomContainerElement).toBeInTheDocument();
        });
    });
});
