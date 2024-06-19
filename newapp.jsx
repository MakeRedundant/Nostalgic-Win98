import React, { useState, useEffect } from 'react';
import '../public/css/98.css';
import '../public/css/index.css';
import '../public/css/prog.css';
import '../public/lib/xterm/xterm.css';

import WindowsFlagSmall from '../public/img/taskbar/WindowsFlagSmall.png';
import MyComputer from '../public/img/desktop/MyComputer.png';
import NetworkNeighborhood from '../public/img/desktop/NetworkNeighborhood.png';
import MyDocuments from '../public/img/desktop/MyDocuments.png';
import Bitmap from '../public/img/desktop/Bitmap.png';
import MyGames from '../public/img/desktop/MyGames.png';
import Winamp from '../public/img/special/winamp.png';
import TextFile from '../public/img/desktop/TextFile.png';
import Email from '../public/img/desktop/Email.png';
import MSDOS from '../public/img/desktop/MSDOS.png';
import RecyclingBinFull from '../public/img/desktop/RecyclingBinFull.png';
import StartIcon from '../public/img/taskbar/Start.png';
import ShowDesktopIcon from '../public/img/taskbar/ShowDesktop.png';
import IESmall from '../public/img/taskbar/IESmall.png';
import OutlookExpress from '../public/img/taskbar/OutlookExpress.png';
import MSDOSIcon from '../public/img/taskbar/msdos.png';
import TaskScheduler from '../public/img/taskbar/TaskScheduler.png';
import Volume from '../public/img/taskbar/Volume.png';
import ShutDownIcon from '../public/img/startmenu/ShutDown.png';
import LogOffIcon from '../public/img/startmenu/LogOff.png';
import RunIcon from '../public/img/startmenu/Run.png';
import HelpIcon from '../public/img/startmenu/Help.png';
import FindIcon from '../public/img/startmenu/Find.png';
import SettingsIcon from '../public/img/startmenu/Settings.png';
import DocumentsIcon from '../public/img/startmenu/Documents.png';
import SubFolder from '../public/img/startmenu/SubFolder.png';
import FavoritesIcon from '../public/img/startmenu/Favorites.png';
import ProgramsIcon from '../public/img/startmenu/Programs.png';
import ProgMan from '../public/img/desktop/ProgMan.png';
import NotepadIcon from '../public/img/desktop/Notepad.png';
import EmailIcon from '../public/img/desktop/Email.png';

const loadScript = (src, type = 'text/javascript', defer = false) => {
  const script = document.createElement('script');
  script.src = src;
  script.type = type;
  script.defer = defer;
  document.body.appendChild(script);
};

const App = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scripts = [
      'lib/inobounce.js',
      'index.js',
      'windows.js',
      'desktop.js',
      'startmenu.js',
      'programs.js',
      'fs.js',
      'prog/resume.js',
      'prog/welcome.js',
      'prog/prompt.js',
      'prog/dialog.js',
      'prog/explorer.js',
      'prog/portfolio.js',
      'prog/notepad.js',
      'prog/email.js',
      'prog/shutdown.js',
      'prog/fullscreen.js',
      'prog/run.js',
      'prog/photo.js',
      'prog/jsdos.js',
      'prog/internet.js',
      'lib/xterm/xterm.js',
      'lib/xterm/fit.js',
      'lib/xterm/attach.js',
    ];
    scripts.forEach(src => loadScript(src, 'text/javascript', true));
  }, []);

  return (
    <div>
      <div className="window-host">
        <div
          className="window"
          data-window
          style={{ top: '50px', left: '200px' }}
          data-name="Welcome!"
          data-icon={WindowsFlagSmall}
          data-wm_order="0"
          data-_wm_id="initialwindow"
        >
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
              Ankara \ Turkiye<br />
            </p>
            <hr className="hr--accent" />
            <p>Find me on:</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/ali-can-kismet-488b42210/" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:info@alicankismet.com" data-upgrade="intro-launchemail">
                  Email
                </a>
                (info@alicankismet.com)
              </li>
              <li>
                <a href="https://github.com/bilgedinozor" target="_blank" rel="noopener">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/users/260095590392791042" target="_blank">
                  Discord
                </a>
              </li>
            </ul>
            <hr className="hr--accent" />
            <p>
              This website is a faithful tribute to Windows 98, and most elements are<br />
              as interactive as they would be in 1998, even on mobile devices.<br />
              Feel free to play around!
              <noscript>
                <br />
                Please note that this requires Javascript, which you have
                <br />
                turned off. Your experience may be degraded.
              </noscript>
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-container">
        <canvas id="selections"></canvas>
        <div className="desktop">
          <div className="desktop-icon" data-launch="welcome">
            <img src={MyComputer} alt="My Computer" />
            <span>My Computer</span>
          </div>
          <div className="desktop-icon" data-launch="explorer:C:/Network Neighborhood">
            <img src={NetworkNeighborhood} alt="Network Neighborhood" />
            <span>Network Neighborhood</span>
          </div>
          <div className="desktop-icon" data-launch="explorer:C:/My Documents">
            <img src={MyDocuments} alt="My Documents" />
            <span>My Documents</span>
          </div>
          <div className="desktop-icon" data-launch="explorer:C:/My Pictures">
            <img src={Bitmap} alt="My Pictures" />
            <span>My Pictures</span>
          </div>
          <div className="desktop-icon" data-launch="explorer:C:/MyGames">
            <img src={MyGames} alt="My Games" />
            <span>Games</span>
          </div>
          <div className="desktop-icon" data-launch="winamp">
            <img src={Winamp} alt="winamp" />
            <div className="desktop-icon__shortcut">
              <img src="../public/img/ShortcutIcon.png" />
            </div>
            <span>Winamp</span>
          </div>
          <div className="desktop-icon" data-launch="notepad">
            <img src={TextFile} alt="TextFile" />
            <div className="desktop-icon__shortcut">
              <img src="../public/img/ShortcutIcon.png" />
            </div>
            <span>Text File</span>
          </div>
          <div className="desktop-icon" data-launch="email">
            <img src={Email} alt="Email" />
            <span>Email</span>
          </div>
          <div className="desktop-icon" data-launch="msdos">
            <img src={MSDOS} alt="MSDOS" />
            <span>MSDOS</span>
          </div>
          <div className="desktop-icon" data-launch="recyclingbin">
            <img src={RecyclingBinFull} alt="Recycling Bin Full" />
            <span>Recycling Bin Full</span>
          </div>
        </div>
      </div>
      <div className="taskbar">
        <div className="start-button" onClick={toggleStartMenu}>
          <img src={StartIcon} alt="Start" />
        </div>
        <div className="taskbar-icons">
          <img src={ShowDesktopIcon} alt="Show Desktop" />
          <img src={IESmall} alt="Internet Explorer" />
          <img src={OutlookExpress} alt="Outlook Express" />
          <img src={MSDOSIcon} alt="MS-DOS" />
          <img src={TaskScheduler} alt="Task Scheduler" />
        </div>
        <div className="taskbar-time">
          <span>{time}</span>
        </div>
        <div className="taskbar-icons-right">
          <img src={Volume} alt="Volume" />
        </div>
      </div>
      {startMenuOpen && (
        <div className="start-menu">
          <div className="start-menu-column">
            <div className="start-menu-item">
              <img src={ProgramsIcon} alt="Programs" />
              <span>Programs</span>
            </div>
            <div className="start-menu-item">
              <img src={DocumentsIcon} alt="Documents" />
              <span>Documents</span>
            </div>
            <div className="start-menu-item">
              <img src={SettingsIcon} alt="Settings" />
              <span>Settings</span>
            </div>
            <div className="start-menu-item">
              <img src={FindIcon} alt="Find" />
              <span>Find</span>
            </div>
            <div className="start-menu-item">
              <img src={HelpIcon} alt="Help" />
              <span>Help</span>
            </div>
            <div className="start-menu-item">
              <img src={RunIcon} alt="Run" />
              <span>Run</span>
            </div>
            <div className="start-menu-item">
              <img src={LogOffIcon} alt="Log Off" />
              <span>Log Off</span>
            </div>
            <div className="start-menu-item">
              <img src={ShutDownIcon} alt="Shut Down" />
              <span>Shut Down</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;