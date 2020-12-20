import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import gsap from 'gsap';

import Hamburger from './Hamburger';
import './Header.scss';

const Header = ({ history }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [state, setState] = useState({
    initial: false,
    opened: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    const unlisten = history.listen(() => {
      setState({ opened: false, menuName: 'Menu' });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  let headerMenu = useRef(null);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY >= 1) {
  //       // console.log(window.scrollY);
  //       setShowHeader(true);
  //     } else {
  //       setShowHeader(false);
  //     }
  //   });
  // });

  useEffect(() => {
    if (showHeader === true) {
      gsap.fromTo(headerMenu, { opacity: 0 }, { opacity: 1, display: 'block' });
    } else {
      gsap.fromTo(headerMenu, { opacity: 1 }, { opacity: 0 });
    }
  }, [showHeader]);

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        opened: true,
        menuName: 'Close',
      });
    } else if (state.opened === true) {
      setState({
        opened: !state.opened,
        menuName: 'Menu',
      });
    } else if (state.opened === false) {
      setState({
        opened: !state.opened,
        menuName: 'Close',
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header ref={(el) => (headerMenu = el)}>
      <div className='container'>
        <div className='wrapper'>
          <div className='inner-header'>
            <div className='logo'>
              <Link to='/' replace>
                PEPSI
              </Link>
            </div>
            <div className='menu'>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
