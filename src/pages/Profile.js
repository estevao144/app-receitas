import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function Profile() {
  const { setPageName, setShowHeader } = useContext(context);
  useEffect(() => {
    setShowHeader({
      showSearch: false,
      showName: true,
      showProfile: true,
    });
    setPageName('Profile');
  }, []);
  return (
    <header>
      <h1>Profile</h1>
    </header>
  );
}

export default Profile;
