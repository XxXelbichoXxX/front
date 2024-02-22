import React from 'react';
import { Icon } from 'semantic-ui-react';
import './HeaderMainClient.scss';


export const HeaderMainClient = () => {
    return (
        <>
            <nav className='header-main-client'>
                <a href="#" className='brand'>Sistema de votos</a>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href="#"><Icon name='sign in alternate'/></a>
                    </li>
                </ul>
            </nav>
        
        </>
    );
};

 
