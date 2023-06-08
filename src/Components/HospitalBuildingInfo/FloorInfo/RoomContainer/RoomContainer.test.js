import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomContainer from './RoomContainer';

test('renders RoomContainer component with room name and beds', () => {
    const roomName = 'اتاق 1';
    const beds = [
        { bedNumber: 'A1', status: 'normal' },
        { bedNumber: 'A2', status: 'warning' },
        { bedNumber: 'A3', status: 'fulled' },
    ];

    render(<RoomContainer Room={roomName} beds={beds} />);

    // Assert that the room name is rendered correctly
    const roomNameElement = screen.getByText(roomName);
    expect(roomNameElement).toBeInTheDocument();

    // Assert that the beds are rendered correctly
    beds.forEach((bed) => {
        const bedElement = screen.getByText(bed.bedNumber);
        expect(bedElement).toBeInTheDocument();
    });
});
