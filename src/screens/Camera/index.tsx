import React, {useState, useEffect} from "react";
import {Text, 
    View, 
    TouchableOpacity, 
    ImageBackground,
    Alert
} from "react-native"
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import styles from "./styles"

export default function App() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;

    useEffect(() =>{
        (async() => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const __closeCamera = () =>{
        setStartOver(true);
    };

    const __takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(true);
    };

    //continuar aqui(comecar a pagina 6) const __savePhoto
}