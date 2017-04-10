import React, { Component } from 'react';

import BadHeader from './components/header';
import BadSidebar from './components/sidebar';
import BadMain from './sections';

class BadRa extends Component {

  render() {
    return (
      <x-bad-con>
        <BadHeader />
        <BadSidebar />
        <BadMain />
      </x-bad-con>
    );
  }

}

export default BadRa;
