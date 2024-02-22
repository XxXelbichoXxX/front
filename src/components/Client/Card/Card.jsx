import React from 'react';
import { Card as CustomCard, Col, Row, Button } from 'antd';
import './Card.scss';

export const CustomCardComponent = () => {
    return (
        <>
            <CustomCard title="JULIO CESAR LOPEZ RUELAS" className='card-default'>
                <h2>Secretaria de Administración y Finanzas</h2>
                <p>Secretario (A)</p>
                <Button type="primary">Votar</Button>
            </CustomCard>
            
        </>
    );
};
