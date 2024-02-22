import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabs.scss';
import { CustomCardComponent } from '../Card/Card';
import { getAllUsers } from '../../../api/user';


export const Tabs = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [users, setUsers] = useState([]);
    const toggle = (tab) => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        function getUsers() {
            const res = getAllUsers();
            console.log(res);
        }
        getUsers();
    }, []);
    
    return (
        <>
            <Nav tabs>
                <NavItem className= {(activeTab=="1" ? "activeTab tabBase" : "tabBase")}onClick={()=>toggle("1")}>
                    Etapa 1
                </NavItem>
                <NavItem className= {(activeTab=="2" ? "activeTab tabBase" : "tabBase")}onClick={()=>toggle("2")}>
                    Etapa 2
                </NavItem>

            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="container">
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                        <CustomCardComponent></CustomCardComponent>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="container">
                        <br />
                        <p>Etapa 2</p>
                    </div>
                </TabPane>
            
            </TabContent>

        </>
    );
};

 
