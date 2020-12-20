import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <div className='sec aboutus'>
          <ul className='sci'>
            <li>
              <a href='linkedin.com/in/nguyen-nguyen-785961194/'>
                <i aria-hidden='true' className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li>
              <a href='https://github.com/pepsialmighty'>
                <i aria-hidden='true' className='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/hainguyen.nguyenhoang.3/'>
                <i aria-hidden='true' className='fab fa-facebook-f'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='sec contact'>
          <ul className='info'>
            <li>
              <span>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              <span>
                Konepajakatu 9 Q17
                <br />
                Vaasa, 65100,
                <br />
                Finland
              </span>
            </li>
            <li>
              <span>
                <i className='fas fa-phone-alt'></i>
              </span>
              <p>
                <a href='tel:358465473003'>+358 46 547 3003</a>
              </p>
            </li>
            <li>
              <span>
                <i className='fas fa-envelope'></i>
              </span>
              <p>
                <a href='mailto:hainguyenn257@gmail.com'>
                  hainguyenn257@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>© Copyright 2020 Nguyen Nguyen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
