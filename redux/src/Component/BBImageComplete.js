import React from 'react';
import "./CSS/BBImage.css"


const BBImageComplete = ({ imageUrl }) => {
    return (
        <div className="upload-complete-container">
            <div className="upload-complete">

                <div className="checkmark">
                    <i class="fa fa-check icons" aria-hidden="true"></i>
                </div>

                <h2>Upload complete</h2>
                <p>You can create a new album with the content just uploaded. You must create an account or sign in to save this content into your account.</p>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        style={{
                            width: '190px',
                            height: '190px',
                            objectFit: 'cover',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            margin: '20px',
                            padding: '6px'
                        }}
                    />
                ) : (
                    <p>No image available.</p>
                )}

                <div className="embed-codes">
                    {/* <label>Embed codes</label> */}
                    <p>Embed codes</p>

                    <select name="uploaded-embed-toggle" id="uploaded-embed-toggle" class="text-input1" data-combo="uploaded-embed-toggle-combo" onchange="changeEmbed(this.value);">
                        <optgroup label="Links">
                            <option value="viewer-links" data-size="viewer">Viewer links</option>
                        </optgroup>
                        <optgroup label="HTML Codes">
                            <option value="html-embed-medium" data-size="medium">HTML full linked</option>
                            <option value="html-embed-thumbnail" data-size="thumb">HTML thumbnail linked</option>
                        </optgroup>
                        <optgroup label="BBCodes">
                            <option value="bbcode-embed-medium" data-size="medium">BBCode full linked</option>
                            <option value="bbcode-embed-thumbnail" data-size="thumb">BBCode thumbnail linked</option>
                        </optgroup>
                    </select>
                    <textarea className='textarea' readOnly value={`https://ibb.co/${imageUrl}`} />
                </div>
            </div>
        </div>
    );
};

export default BBImageComplete;