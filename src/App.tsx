import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import { Raiting } from './components/Raiting/Raiting';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRaiting } from './UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div className={'App'}>
      <OnOff />
      {/* <OnOff on={true} />
      <OnOff on={false} /> */}
      <UncontrolledAccordion titleValue={'Menu'} />
      <UncontrolledAccordion titleValue={'Users'} />
      <PageTitle title={'This is App component'} />
      <PageTitle title={'My friends'} />
      Article 1
      <Raiting value={3} />
      <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />
      Article 2
      <UncontrolledRaiting />
      <Raiting value={0} />
      <Raiting value={1} />
      <Raiting value={2} />
      <Raiting value={3} />
      <Raiting value={4} />
      <Raiting value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  // debugger
  console.log('PageTitle rendering');
  return <h1>{props.title}</h1>;
}

export default App;
