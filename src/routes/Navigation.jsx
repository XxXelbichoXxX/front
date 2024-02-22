import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../App.scss';
import { map } from 'lodash';
import routers from './routes';

console.log(routers);

export function Navigation() {
  return (
    <>    
        <Router>
            <Routes>
              {map(routers, (route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <route.layout>
                      <route.component />
                    </route.layout>
                  }              
                />
              ))}
            </Routes>
        </Router>
    </>
  )
}

