import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience, Downlaod <br /> Chi-Tech App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

        <div className="back-to-top" id='back-to-top'>
            <a href="#navbar"><button>Back to top</button></a>
        </div>
    </div>
  )
}



export default AppDownload