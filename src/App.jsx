import React from "react";
import { DropArea } from "./DropArea";
import { MyDropzone } from "./MyDropZone";

export const App = () => {
    return (
        <div>
            <h2>Libreria</h2>
            <MyDropzone />
            <h2>API</h2>
            <DropArea />
        </div>
    );
};
