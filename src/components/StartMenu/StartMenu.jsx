import React from 'react';

const StartMenu = () => (
  <div className="start-menu__container">
    <div className="start-menu">
      <div className="start-menu__stripe">
        <span className="start-menu__stripe-text">
          Brian<b>CAN</b>&nbsp;<b>Trang</b>
        </span>
      </div>
      <div className="start-menu__menu">
        <div className="start-menu__item" data-launch="shutdown">
          <img className="start-menu__icon" src="/img/startmenu/ShutDown.png" alt="Shut Down" />
          <span className="start-menu__item-text">Shut Down...</span>
        </div>
        <div className="start-menu__item" data-launch="logoff">
          <img className="start-menu__icon" src="/img/startmenu/LogOff.png" alt="Log Off" />
          <span className="start-menu__item-text">Log Off </span>
        </div>
        <div className="start-menu__divider"></div>
        <div className="start-menu__item" data-launch="run">
          <img className="start-menu__icon" src="/img/startmenu/Run.png" alt="Run" />
          <span className="start-menu__item-text">Run...</span>
        </div>
        <div className="start-menu__item">
          <img className="start-menu__icon" src="/img/startmenu/Help.png" alt="Help" />
          <span className="start-menu__item-text">Help</span>
        </div>
        <div className="start-menu__item">
          <img className="start-menu__icon" src="/img/startmenu/Find.png" alt="Find" />
          <span className="start-menu__item-text">Find</span>
        </div>
        <div className="start-menu__item" data-launch="settings">
          <img className="start-menu__icon" src="/img/startmenu/Settings.png" alt="Settings" />
          <span className="start-menu__item-text">Settings</span>
        </div>
        <div className="start-menu__item" data-launch="programs">
          <img className="start-menu__icon" src="/img/startmenu/Programs.png" alt="Programs" />
          <span className="start-menu__item-text">Programs</span>
        </div>
      </div>
    </div>
  </div>
);

export default StartMenu;
