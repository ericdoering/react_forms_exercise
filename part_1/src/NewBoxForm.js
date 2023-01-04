import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({createBox}) {
    const [formData, setFormData] = useState({
        backgroundcolor: "",
        height: "",
        width: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const getInputs = e => {
        e.preventDefault();
        createBox({...formData, id: uuid()});
        setFormData({backgroundcolor: "", height: "", width: ""});
    };

return (
    <div>
        <form onSubmit={getInputs}>
            <div>
            <lable htmlFor="backgroundcolor">Background Color</lable>
                <input
                id="backgroundcolor"
                type="text"
                name="backgroundcolor"
                value={formData.backgroundcolor}
                onChange={handleChange}
            />
            </div>
            <div>
            <lable htmlFor="height">Height</lable>
                <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            </div>
            <div>
            <lable htmlFor="width">Width</lable>
                <input
                id="width"
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            </div>
            <button id="box-button">Create Box</button>
        </form>
    </div>
)};

export default NewBoxForm;