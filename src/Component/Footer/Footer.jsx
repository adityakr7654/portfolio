import React from 'react'
import './Footer.css'
import footer_logo from '../../assest/logo.png'
import user_icon from '../../assest/user.webp'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>i am web developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-buttom">
            <p className="footer-buttom-left">© 2024 Aditya Kumar. All rights reserved.</p>
            <p>Term of service</p>
            <p>Privacy policy</p>
            <p>connect with me</p>
        </div>
    </div>
  )
}

export default Footer