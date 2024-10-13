import Datauri from 'datauri'; // Correct import for the 'datauri' package
import path from 'path';

const getDataUri = (file) => {
    const datauri = new Datauri();
    const extName = path.extname(file.originalname).toString();
    return datauri.format(extName, file.buffer);
};

export default getDataUri;
