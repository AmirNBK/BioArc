import React from 'react';
import { render } from '@testing-library/react';
import HospitalContainer from './HospitalContainer';

describe('HospitalContainer', () => {
    test('renders HospitalContainer component', () => {
        const buildingNames = ['ساختمان امید', 'ساختمان نیما'];
        const hospitalName = 'بیمارستان امام';
        render(<HospitalContainer HospitalName={hospitalName} buildingNames={buildingNames} />);
    });
});
