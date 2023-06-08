import React from 'react';
import { render } from '@testing-library/react';
import HospitalBuilding from './HospitalBuilding';

test('renders building name and hospital name correctly', () => {
  const buildingName = 'ساختمان امید';
  const hospitalName = 'بیمارستان امام';

  const { getByText } = render(
    <HospitalBuilding BuildingName={buildingName} HospitalName={hospitalName} />
  );

  // Check if the building name is rendered correctly
  expect(getByText(buildingName)).toBeInTheDocument();

  // Check if the hospital name is rendered correctly
  expect(getByText(hospitalName)).toBeInTheDocument();
});
