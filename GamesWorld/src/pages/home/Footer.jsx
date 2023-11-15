import React from 'react';
import './Footer.css';
import gambar from '../../assets/Img/Chigh.png';

const Footer = () => {
  return (
    <footer className="text-white hi text-center py-3">
      
      <h6><img src={gambar} alt='' className='halo'/>© 2023 C-High Games. All right received.</h6>
    </footer>
  );
}

export default Footer;
