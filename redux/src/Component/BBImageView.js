import React, { useState } from "react";
import { connect } from "react-redux";
// import ImgbbComplete from "./ImgbbComplete";
import BBImageComplete from "./BBImageComplete";

const ImgbbView = ({ selectedFile }) => {
    const [isUploading, setIsUploading] = useState(false)
    const [isUploadComplete, setIsUploadComplete] = useState(false)
    const [imageUrl, setImageUrl] = useState("")

    const handleUploadClick = () => {
        setIsUploading(true)

        setTimeout(() => {
            setIsUploading(false)
            setIsUploadComplete(true)
            setImageUrl(URL.createObjectURL(selectedFile));
        }, 3000)
    };

    if (isUploadComplete) {
        return <BBImageComplete imageUrl={imageUrl} />;
    }
    return (
        <div className="view">
            <i className="fa fa-picture-o icon" aria-hidden="true"></i>
            <p>Edit or resize any image by clicking the image preview</p>
            <div>
                <p>You can add more images from <span className="span">your computer</span> or <span className="span">add image URLs.</span></p>
            </div>

            {selectedFile && (
                <div>
                    <img src={URL.createObjectURL(selectedFile)} className="urlimg" />
                    {/* {isUploading && (
                        <div className="spinner-overlay">
                            <div className="spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )} */}
                </div>

            )}

            <h3>Auto delete image</h3>
            <select name="upload-expiration" id="upload-expiration" className="text-input">
                <option value="" selected>Don't autodelete</option>
                <option value="PT5M">After 5 minutes</option>
                <option value="PT15M">After 15 minutes</option>
                <option value="PT30M">After 30 minutes</option>
                <option value="PT1H">After 1 hour</option>
                <option value="PT3H">After 3 hours</option>
                <option value="PT6H">After 6 hours</option>
                <option value="PT12H">After 12 hours</option>
                <option value="P1D">After 1 day</option>
                <option value="P2D">After 2 days</option>
                <option value="P3D">After 3 days</option>
                <option value="P4D">After 4 days</option>
                <option value="P5D">After 5 days</option>
                <option value="P6D">After 6 days</option>
                <option value="P1W">After 1 week</option>
                <option value="P2W">After 2 weeks</option>
                <option value="P3W">After 3 weeks</option>
                <option value="P1M">After 1 month</option>
                <option value="P2M">After 2 months</option>
                <option value="P3M">After 3 months</option>
                <option value="P4M">After 4 months</option>
                <option value="P5M">After 5 months</option>
                <option value="P6M">After 6 months</option>
            </select>

            <div>
                <button
                    className="uploadbtn"
                    onClick={(e) => {
                        e.preventDefault()
                        handleUploadClick()
                    }}
                >
                    UPLOAD
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    // imageUrl: state.ImgbbReducers.imageUrl
})

const mapStateToDispatch = (dispatch) => ({})

export default connect(mapStateToProps, mapStateToDispatch)(ImgbbView)