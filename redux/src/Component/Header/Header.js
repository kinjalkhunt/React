import React, { useRef, useState } from "react"
import "../CSS/BBImage.css"
// import imgbblogo from "../../Assest/imgbblogo.png"
// import { uploadImageSuccess } from ""
import { connect } from "react-redux"
import BBImageView from "../BBImageView"
import { uploadImageSuccess } from "../../REDUX/action/ImageBBAction"


function Headers({ uploadFile }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploadImgbb, setUploadImgbb] = useState(false)
    const fileInputRef = useRef(null)

    if (uploadImgbb) {

        return <BBImageView selectedFile={selectedFile} />;
    }

    return (
        <>
            <div className="containers">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="nav">
                        <a href="/">Upload</a>
                        <a href="/signin">Sign in</a>
                        <a href="/signup" className="button">Create account</a>
                    </div>

                {/* <div>
                    <img className="img" src={imgbblogo} />
                </div> */}

                <div>
                    <input type="file"
                        ref={fileInputRef}
                        onChange={(e) => {
                            e.preventDefault()
                            setSelectedFile(e.target.files[0])
                            uploadFile(e.target.files[0].name)
                            setUploadImgbb(true)
                        }}
                        style={{ display: 'none' }}
                    />

                    <button className="imgbtn"
                        onClick={(e) => {
                            e.preventDefault()
                            fileInputRef.current.click()

                        }
                        }>
                        UPLOAD
                    </button>

                </div>

            </div>
            <hr style={{ marginTop: "5px" }} />
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapStateToDispatch = (dispatch) => ({
    uploadFile: (imageUrl) => (dispatch(uploadImageSuccess(imageUrl)))
})
export default connect(mapStateToProps, mapStateToDispatch)(Headers)