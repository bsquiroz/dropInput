import React, { useState } from "react";
import "./styles.css";

export const DropArea = () => {
    const [imageCurrent, setImageCurrent] = useState(null);
    const [modalShowImage, setModalShowImage] = useState(null);

    const changeImage = (e) => {
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (e) => {
            e.preventDefault();
            setImageCurrent(e.target.result);
        };
    };

    const handleDeleteImage = () => {
        setImageCurrent(null);
    };

    const handleModalImage = (urlImage) => {
        setModalShowImage(urlImage);
    };

    const handleCloseModalImage = () => {
        setModalShowImage(null);
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={changeImage}
            />

            {imageCurrent && (
                <div className="drop_img">
                    <div
                        className="delete_img"
                        onClick={() => handleDeleteImage()}
                    >
                        X
                    </div>
                    <img
                        className="drop_img--action"
                        src={imageCurrent}
                        alt=""
                        onClick={() => handleModalImage(imageCurrent)}
                    />
                </div>
            )}

            {modalShowImage && (
                <div className="modal__img">
                    <div
                        className="close__modal"
                        onClick={() => handleCloseModalImage()}
                    >
                        X
                    </div>
                    <img src={modalShowImage} alt="" />
                </div>
            )}
        </div>
    );
};
