import React from 'react';
import './App.css';
import {MainCanvas} from "./background/MainCanvas";

function App() {
    return (
        <div className="bg-gray-600 cursor-none">

            <MainCanvas/>
            {/*<div className="relative h-screen w-screen">*/}
            {/*    <Canvas style={{position: 'absolute', top: 0, left: 0}}>*/}
            {/*        <ambientLight intensity={0.5}/>*/}
            {/*        <directionalLight position={[2, 2, 2]}/>*/}
            {/*        <BackgroundScene/>*/}
            {/*        <CursorCircle/>*/}
            {/*    </Canvas>*/}

            {/*    <div style={{position: 'relative', zIndex: 10, padding: '2rem'}}>*/}
            {/*        <h1>Ferdinand Strobel</h1>*/}
            {/*        <p>Das 3D-Modell läuft im Hintergrund 🎨</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}


export default App;
