import { React, Component } from "react";
import styles from "./Navbar.module.css";

import Nav from 'react-bootstrap/Nav';

export default class Navbar extends Component {
    render() {
        return (
            <header className={" " + styles.nav}>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
                    className="justify-content-center"
                >
                    <Nav.Item>
                        <Nav.Link href="/home"> Actives </Nav.Link>{" "}
                    </Nav.Item>{" "}
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"> Link </Nav.Link>{" "}
                    </Nav.Item>{" "}
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"> Link </Nav.Link>{" "}
                    </Nav.Item>{" "}
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled{" "}
                        </Nav.Link>{" "}
                    </Nav.Item>{" "}
                </Nav>{" "}
            </header>
        );
    }
}
