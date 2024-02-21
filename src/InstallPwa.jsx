import React, { useState, useEffect } from 'react';

const InstallPWAButton = () => {
  const [canInstall, setCanInstall] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if the browser supports PWA installation
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (canInstall && deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setCanInstall(false);
      });
    }
  };

  return (
    <button onClick={handleInstallClick} style={{ display: canInstall ? 'block' : 'none' }}>
      Install App
    </button>
  );
};

export default InstallPWAButton;
