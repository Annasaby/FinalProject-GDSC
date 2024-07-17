import { useState } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../service/firebase";
import {v4 as uuidv4} from "uuid";


export default function useStorage(){
    const [progress, setPrograss] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const startUpload = (file) => {
        if (!file) {
            return;
        }

        const fileId = uuidv4();
        console.log(fileId);
        // const storageRef = ref(storage, 'images/mountains.jpg');
        // const uploadTask = uploadBytesResumable(storageRef, file);
    }


    return(progress, error, url, startUpload);
}