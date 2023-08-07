import React from 'react';
import "../styles/home.css"
import header from "../images/image19.jpg";
import { imageList } from '../components/imageloader';


function Home() {

    return (
        <div>
            <div>
                <img style={{ width: '100%', maxHeight: '800px' }} src={header} alt = "Hero of Tree"/>
                <h1>
                The World Through The Eyes Of My Camera
                </h1>
            </div>
            <div className='pictureWall'>
                <section style={{  padding: 10 }} id="photos">
                {imageList.map((picture,index) => {
                return (
                    <img key={index} src={picture} alt = "Photography Column Art"/>
                );
                })}
                </section>
            </div>
        </div>
    )
}

export default Home