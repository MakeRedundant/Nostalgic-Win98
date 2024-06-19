import React from 'react';

const TaskBar = () => (
  <div className="task-bar">
    <button id="start-btn">
      <img src="/img/taskbar/Start.png" alt="Start" />
    </button>
    <div className="task-bar__divider"></div>
    <img src="/img/taskbar/ShowDesktop.png" alt="Show Desktop" title="Show Desktop" className="task-bar__quick" />
    <img src="/img/taskbar/IESmall.png" alt="Internet Explorer" title="Lauch Internet Explorer Browser" className="task-bar__quick" />
    <img src="/img/taskbar/OutlookExpress.png" alt="Outlook Express" title="Lauch Outlook Express" className="task-bar__quick" data-launch="email" />
    <img src="/img/taskbar/msdos.png" alt="Dos Prompt" title="Lauch MS-Dos" className="task-bar__quick" data-launch="cmd" />
    <div className="task-bar__divider"></div>
    <div className="task-bar__main" id="task-bar__main"></div>
    <div className="task-bar__divider"></div>
    <div className="task-bar__tray">
      <img src="/img/taskbar/TaskScheduler.png" alt="Task Scheduler" title="Task Scheduler is ready." className="task-bar__tray__icon" />
      <img src="/img/taskbar/Volume.png" alt="Volume" title="Volume" className="task-bar__tray__icon" />
      <span id="time">12:57 PM</span>
    </div>
  </div>
);

export default TaskBar;
