import React from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterColLeft from './FooterColLeft';
import FooterColCenter from './FooterColCenter';
import FooterColRight from './FooterColRight';
import logoWordmark from './../img/universe-wordmark-white.svg';
import '../css/Footer.css';

function Footer( className ) {
  return (
    <footer
      className={`container-fluid ${className}`}
      style={{ backgroundColor: '#000' }}
      >
      <div className="container pt-6 pb-6">
        <div className="mb-4b">
          <a href="/">
            <img
              src={logoWordmark}
              className="navbar-brand-img"
              alt="Universe Logo"
              style={{
                marginLeft: '-3px'
              }}
            />
          </a>
        </div>
        <div className="text-white">
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4 ml-auto">
              <ul className="list-unstyled my-2">
                <li className="d-block mb-3">Products</li>
                <FooterColLeft />
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <ul className="list-unstyled my-2">
                <li className="d-block mb-3">Platforms</li>
                <FooterColCenter />
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <ul className="list-unstyled my-2">
                <li className="d-block mb-3">Community</li>
                <FooterColRight />
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white-50 mb-4">
          <div className="row d-flex align-items-end">
            <ul
              className="inline-list"
              style={{
                paddingRight: '2px',
                paddingLeft: '8px'
              }}>
            </ul>
            <div 
              className="
                subscribe 
                ml-auto 
                pl-3 
                pr-3"
              >
              <p 
                className="
                  text-white 
                  small-font-size-90 
                  mt-4"
                >
                Subscribe to our mailing list.
              </p>
              <a
                className="
                  btn 
                  btn-sm 
                  btn-outline-white 
                  btn-block mx-auto 
                  mb-4"
                href="/subscribe"
                role="button"
                >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="container line w-100 bg-white mb-4c" />
        <div 
          className="
            small 
            font-weight-heavy
            text-white-50 
            letter-space 
            mb-2"
          >
          <CopyrightUpdate
            style={{
              display: 'inline-block'
            }}/>
            &nbsp;Universe Labs Inc.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
