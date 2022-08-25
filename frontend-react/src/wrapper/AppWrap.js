import React from 'react';
import {SocialMedia } from '../components';
import {Gibberish} from '../components';

const AppWrap = (Component, idName, classNames, gibberish) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      {gibberish? <Gibberish/> : <></>}
      <div className="app__wrapper app__flex">
        <Component />
      </div>
    </div>
  );
};

export default AppWrap;