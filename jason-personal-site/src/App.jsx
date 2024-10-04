import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import WorkTimeline from './components/workTimeline';  {/*Import the WorkTimeline component*/}
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <WorkTimeline />
      <Projects />
    </div>
  );
}

export default App;
