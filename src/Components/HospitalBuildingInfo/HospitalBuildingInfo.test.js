import { render, screen } from '@testing-library/react';
import HospitalBuildingInfo from './HospitalBuildingInfo';

describe('HospitalBuildingInfo', () => {
    test('renders tabs with correct labels', () => {
        const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];
        render(<HospitalBuildingInfo tabLabels={tabLabels} BuildingName="Building" />);

        tabLabels.forEach((label) => {
            const tabElement = screen.getByText(label);
            expect(tabElement).toBeInTheDocument();
        });
    });
});
