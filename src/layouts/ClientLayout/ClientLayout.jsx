import React from 'react';
import './ClientLayout.scss';
import { HeaderMainClient } from '../../components/Client/HeaderMainClient/HeaderMainClient';
import { Tabs } from '../../components/Client/Tabs/Tabs';


export function ClientLayout(props) {
  const { children } = props;

  return (
    <>
      <HeaderMainClient />
      <Tabs/>
      <p>ClientLayout</p>
      {children}
    </>
  );
}



/* import React from 'react';
import './ClientLayout.scss';

export function ClientLayout(props) {
    const {children} = props;
  return (
    <>
      <p>ClientLayout</p>
      {children}
    </>
  )
}
 */