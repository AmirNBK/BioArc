import React from 'react';
import { render, screen } from '@testing-library/react';
import HospitalInfoCard from './HospitalInfoCard';

describe('HospitalInfoCard', () => {
    it('renders information correctly', () => {
        const info = [
            { label: 'تعداد ساختمان ها', value: '3 عدد' },
            { label: 'قابل رزرو', value: '32 عدد' },
            { label: 'تعداد کل اتاق ها', value: '18 عدد' },
            { label: 'غیر قابل رزرو', value: '12 عدد' },
        ];

        render(<HospitalInfoCard info={info} />);
    });
});
