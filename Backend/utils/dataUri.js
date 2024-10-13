import DataUriParser from "dataUri/parser.js"
import datauri from 'datauri'; // Correct case


import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName,file.buffer);
}

export default getDataUri;