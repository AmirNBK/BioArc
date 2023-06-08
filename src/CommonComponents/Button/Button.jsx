import React from 'react';

const Button = ({ text, backgroundColor, }) => {
    return (
        <div>
            <button
                className='w-full text-white'
                style={{ backgroundColor: `${backgroundColor}`, border: 'none', padding: '5px 25px', borderRadius: '5px' }}>
                {text}
            </button>
        </div >
    );
};

export default Button;