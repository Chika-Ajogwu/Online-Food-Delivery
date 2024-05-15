import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    
    const linkedIn = "https://www.linkedin.com/in/chikaodili-ajogwu-a63861232"
    const facebook = "https://www.facebook.com/profile.php?id=61553342942326&mibextid=ZbWKwL"

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-right">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vitae consequuntur praesentium nisi id earum asperiores, sed nobis saepe iusto obcaecati quidem ipsum necessitatibus nesciunt? Blanditiis cumque rerum nihil quasi?</p>
                <div className="footer-social-icons">
                
                    <a href={facebook}><img  src={assets.facebook_icon} alt="" /></a>
                    <img src={assets.twitter_icon} alt="" />
                    <a href={linkedIn}><img src={assets.linkedin_icon} alt="" /></a>
                    
                   
                </div>
            </div>



            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

             <div className="footer-content-left">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2349067377200</li>
                    <li>ajogwuchikaodili@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; Chi-Tech.com - All right reserved.</p>
    </div>
  )
} 

export default Footer