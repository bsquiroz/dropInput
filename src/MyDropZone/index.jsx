import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import "./styles.css";

export const MyDropzone = () => {
    const [imageCurrent, setImageCurrent] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        const reader = new FileReader();

        reader.readAsDataURL(acceptedFiles[0]);

        reader.onload = (e) => {
            e.preventDefault();
            setImageCurrent(e.target.result);
        };
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div>
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
            {imageCurrent && (
                <div className="drop_img">
                    <img src={imageCurrent} alt="" />
                </div>
            )}
        </div>
    );
};
