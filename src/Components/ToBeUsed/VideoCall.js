import React from 'react';
import '../Pages_CSS/VideoCall.css';
import VideoAd from '../Design/VideoAd.js';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {

    const Navigate = useNavigate();

    const NavigatetoVideoCall = async () => {
        window.open("https://refmemeet.vercel.app/")
    }

    return (
        <>
            <div className='VideoCallDiv'>

                <div className='SplineDiv'>
                    <VideoAd />
                </div>

                <div className='WordsDiv'>
                    <h2>Join Us</h2>

                    <p>In a quaint town nestled between rolling hills and serene landscapes, a diverse community thrives. Residents, each with unique stories, create a tapestry of shared experiences. The bustling town square, adorned with charming shops and inviting cafes, serves as a focal point for gatherings and lively conversations.</p>

                    <button className='textbut' onClick={(e) => {
                        e.preventDefault();
                        NavigatetoVideoCall();
                    }}>Get Started</button>

                </div>


            </div>
        </>
    )
}

export default VideoCall