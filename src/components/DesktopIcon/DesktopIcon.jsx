import React from 'react';

const DesktopIcon = ({ src, alt, label, dataLaunch }) => (
  <div className="desktop-icon" data-launch={dataLaunch}>
    <img src={src} alt={alt} />
    <span>{label}</span>
  </div>
);

export default DesktopIcon;
