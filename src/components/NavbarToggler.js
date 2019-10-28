import React from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';

// Value equal to `.collapsing` class is set to none.

$(document).ready(function() {
  $('button').click(function() {
    $('#navbarBasic').animate(
      {
        opacity: 'toggle',
        backgroundColor: '#000'
      },
      300
    );
  });
});

function NavbarToggler({ style, className }) {
  return (
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarBasic"
      aria-controls="navbarBasic"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={style}
    >
      <span className={`icon-bar top-bar ${className}`} />
      <span className={`icon-bar bottom-bar ${className}`} />
    </button>
  );
}

export default NavbarToggler;
