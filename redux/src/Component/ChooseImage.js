// ChooseImageComponent.js
import React from 'react';

const ChooseImage = ({ onChooseImageClick }) => (
    <div>
        <button
            onClick={onChooseImageClick}
            style={{ backgroundColor: 'skyblue', marginLeft: '550px', padding: '10px', fontSize: '30px' }}
        >
            Choose Upload Image
        </button>
    </div>
);

export default ChooseImage;
