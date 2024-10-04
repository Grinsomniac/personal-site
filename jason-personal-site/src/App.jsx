import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import WorkTimeline from './components/WorkTimeline'; {/*Import the WorkTimeline component*/}

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <WorkTimeline />
    </div>
  );
}

export default App;
