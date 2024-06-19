import React from 'react';
import HeadComponent from './components/HeadComponent/HeadComponent';
import WelcomePopup from './components/WelcomePopup/WelcomePopup';
import DesktopIcon from './components/DesktopIcon/DesktopIcon';
import TaskBar from './components/TaskBar/TaskBar';
import StartMenu from './components/StartMenu/StartMenu';

const App = () => {
  return (
    <div className="App">
      <HeadComponent />
      <WelcomePopup />
      <div id="desktop-icons">
        <DesktopIcon src="/img/icons/Personal.png" alt="Personal Info" label="Personal Info" dataLaunch="personal" />
        <DesktopIcon src="/img/icons/LinkedIn.png" alt="LinkedIn" label="LinkedIn" dataLaunch="linkedin" />
        <DesktopIcon src="/img/icons/Email.png" alt="Email" label="Email" dataLaunch="email" />
        <DesktopIcon src="/img/icons/GitHub.png" alt="GitHub" label="GitHub" dataLaunch="github" />
        <DesktopIcon src="/img/icons/Discord.png" alt="Discord" label="Discord" dataLaunch="discord" />
      </div>
      <TaskBar />
      <StartMenu />
    </div>
  );
}

export default App;
