import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import WorkTimeline from './components/workTimeline';  {/*Import the WorkTimeline component*/}
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <WorkTimeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
