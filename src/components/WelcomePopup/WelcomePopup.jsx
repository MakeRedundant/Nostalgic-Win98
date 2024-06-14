import React from 'react';

const WelcomePopup = () => (
  <div className="window-host">
    <div className="window" style={{ top: '50px', left: '200px' }} data-window data-name="Welcome!" data-icon="/img/taskbar/WindowsFlagSmall.png" data-wm_order="0" data-_wm_id="initialwindow">
      <div className="title-bar">
        <div className="title-bar-text">Welcome!</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body typography">
        <h1>
          Brian Trang Win 98
          <img src="/img/myprofile.png" alt="Brian Trang Win 98" align="middle" />
        </h1>
        <hr className="hr--accent" />
        <p>
          <b>System Admin</b> &amp; <b>IT Consultant.</b><br />
          Technology Enthusiast, Game Collector<br />
          Australia<br />
        </p>
        <hr className="hr--accent" />
        <p>Find me on:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/ali-can-kismet-488b42210/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="mailto:info@alicankismet.com">Email</a> (info@alicankismet.com)</li>
          <li><a href="https://github.com/bilgedinozor" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
        <hr className="hr--accent" />
        <p>
          This website is a faithful tribute to Windows 98, and most elements are<br />
          as interactive as they would be in 1998, even on mobile devices.<br />
          Feel free to play around!
          <noscript>
            <br />
            Please note that this requires Javascript, which you have<br />
            turned off. Your experience may be degraded.
          </noscript>
        </p>
      </div>
    </div>
  </div>
);

export default WelcomePopup;
