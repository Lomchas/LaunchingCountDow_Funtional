import React from 'react'
import facebookIcon from '../Images/icon-facebook.svg'
import instagramIcon from '../Images/icon-instagram.svg'
import pinteresIcon from '../Images/icon-pinterest.svg'
import '../styles/Social.css'


const Socials = () => {
  return (
    <div className='social-container'>
        <img className='social-Icon' src={facebookIcon} alt='icon-socialRed'/>
        <img className='social-Icon' src={instagramIcon} alt='icon-socialRed'/>
        <img className='social-Icon' src={pinteresIcon} alt='icon-socialRed'/>
    </div>
  )
}

export default Socials