import React, {useEffect, useRef, useState} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import ShibaScene from "../assets/shiba.glb";
import {useGLTF} from "@react-three/drei";

const Shiba = ({...props}) => {

    const shibaRef = useRef();
    const { scene } = useGLTF(ShibaScene);

    useFrame(() => {
        if(shibaRef.current) {
            shibaRef.current.rotation.y += 0.01;
        }
    })

    return (
        <mesh {...props} ref = {shibaRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Shiba;