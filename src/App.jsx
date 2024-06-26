import { useState, useEffect } from 'react';

import '../public/css/98.css';
import '../public/css/index.css';
import '../public/css/prog.css';
import '../public/lib/xterm/xterm.css';

import WindowsFlagSmall from '/img/taskbar/WindowsFlagSmall.png';
import MyComputer from '/img/desktop/MyComputer.png';
import NetworkNeighborhood from '/img/desktop/NetworkNeighborhood.png';
import MyDocuments from '/img/desktop/MyDocuments.png';
import Bitmap from '/img/desktop/Bitmap.png';
import MyGames from '/img/desktop/MyGames.png';
import Winamp from '/img/special/winamp.png';
import TextFile from '/img/desktop/TextFile.png';
import Email from '/img/desktop/Email.png';
import MSDOS from '/img/desktop/MSDOS.png';
import RecyclingBinFull from '/img/desktop/RecyclingBinFull.png';
import StartIcon from '/img/taskbar/Start.png';
import ShowDesktopIcon from '/img/taskbar/ShowDesktop.png';
import IESmall from '/img/taskbar/IESmall.png';
import OutlookExpress from '/img/taskbar/OutlookExpress.png';
import MSDOSIcon from '/img/taskbar/msdos.png';
import TaskScheduler from '/img/taskbar/TaskScheduler.png';
import Volume from '/img/taskbar/Volume.png';
import ShutDownIcon from '/img/startmenu/ShutDown.png';
import LogOffIcon from '/img/startmenu/LogOff.png';
import RunIcon from '/img/startmenu/Run.png';
import HelpIcon from '/img/startmenu/Help.png';
import FindIcon from '/img/startmenu/Find.png';
import SettingsIcon from '/img/startmenu/Settings.png';
import DocumentsIcon from '/img/startmenu/Documents.png';
import SubFolder from '/img/startmenu/SubFolder.png';
import FavoritesIcon from '/img/startmenu/Favorites.png';
import ProgramsIcon from '/img/startmenu/Programs.png';
import ProgMan from '/img/desktop/ProgMan.png';
import NotepadIcon from '/img/desktop/Notepad.png';
import EmailIcon from '/img/desktop/Email.png';

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
      '/lib/inobounce.js',
      '/lib/xterm/xterm.js',
      '/lib/xterm/fit.js',
      '/lib/xterm/attach.js',
      '/index.js',
      '/windows.js',
      '/desktop.js',
      '/startmenu.js',
      '/programs.js',
      '/fs.js',
      '/prog/resume.js',
      '/prog/welcome.js',
      '/prog/prompt.js',
      '/prog/dialog.js',
      '/prog/explorer.js',
      '/prog/portfolio.js',
      '/prog/notepad.js',
      '/prog/email.js',
      '/prog/shutdown.js',
      '/prog/fullscreen.js',
      '/prog/run.js',
      '/prog/photo.js',
      '/prog/jsdos.js',
      '/prog/internet.js',
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
              <img src="/img/ShortcutIcon.png" alt="Shortcut" />
            </div>
            <span>Winamp</span>
          </div>
          <div className="desktop-icon" data-launch="notepad">
            <img src={TextFile} alt="TextFile" />
            <div className="desktop-icon__shortcut">
              <img src="/img/ShortcutIcon.png" alt="Shortcut" />
            </div>
            <span>Text File</span>
          </div>
          <div className="desktop-icon" data-launch="notepad">
            <img src={NotepadIcon} alt="Notepad" />
            <span>Notepad</span>
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
      <div className="start-menu">
        <div className="start-menu-header">
          <img src={StartIcon} alt="Start" onClick={toggleStartMenu} />
        </div>
        {startMenuOpen && (
          <div className="start-menu-content">
            <div className="start-menu-icons">
              <img src={ShutDownIcon} alt="Shut Down" />
              <img src={LogOffIcon} alt="Log Off" />
              <img src={RunIcon} alt="Run" />
              <img src={HelpIcon} alt="Help" />
              <img src={FindIcon} alt="Find" />
              <img src={SettingsIcon} alt="Settings" />
              <img src={DocumentsIcon} alt="Documents" />
              <img src={FavoritesIcon} alt="Favorites" />
              <img src={ProgramsIcon} alt="Programs" />
            </div>
            <div className="start-menu-items">
              <div className="start-menu-item">
                <img src={ProgMan} alt="Program Manager" />
                <span>Program Manager</span>
              </div>
              <div className="start-menu-item">
                <img src={NotepadIcon} alt="Notepad" />
                <span>Notepad</span>
              </div>
              <div className="start-menu-item">
                <img src={EmailIcon} alt="Email" />
                <span>Email</span>
              </div>
              <div className="start-menu-item">
                <img src={SubFolder} alt="SubFolder" />
                <span>SubFolder</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="taskbar">
        <img src={ShowDesktopIcon} alt="Show Desktop" />
        <img src={IESmall} alt="Internet Explorer" />
        <img src={OutlookExpress} alt="Outlook Express" />
        <img src={MSDOSIcon} alt="MS-DOS Prompt" />
        <img src={TaskScheduler} alt="Task Scheduler" />
        <img src={Volume} alt="Volume" />
        <div className="taskbar-clock">{time}</div>
      </div>
    </div>
  );
};

export default App;
