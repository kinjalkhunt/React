// UploadProgressComponent.js
import React from 'react';

const ProgressImage = ({ loading, uploadedImage, error }) => (
    <div>
        {loading && <p>Uploading...</p>}
        {uploadedImage && <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
);

export default ProgressImage;
