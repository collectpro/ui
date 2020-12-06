import React, { useState, useEffect } from 'react';

import Screen from './Screen';
import Reader from './Reader';
import Row from './Row';
import Navbar from './Navbar';
import Nav from './Nav';
import Button from './Button';
import Form from './Form';
import Footer from './Footer';

import {
  Add32,
  DocumentBlank32,
  Email32,
  Calendar32,
  LetterPp32,
  Csv32,
  RequestQuote32,
  Settings32,
  Chart_3D32,
  LinuxAlt32
} from '@carbon/icons-react';

import './sass/main.scss';

/**
 * Quick showcase of the UI kit components.
 * 
 * @component
 */
export default function Showcase() {

  // Use state of Reader component as reference for other components.
  const [readerId, setReaderId] = useState();

  useEffect(() => {

    const element = document.getElementsByClassName('reader')[0];

    if (element) setReaderId(element.getAttribute('id'));
  }, []);

  return (
    <Screen>
      <Navbar readerId={readerId}>
        <Navbar.Brand><Logo /></Navbar.Brand>
        <Navbar.Left>
          <Nav.Link to="/">Left Link</Nav.Link>
          <Nav.Button>Left Button</Nav.Button>
        </Navbar.Left>
        <Navbar.Right>
          <Nav.Link to="/">Right Link</Nav.Link>
          <Nav.Button colour="alertgood">Right Button</Nav.Button>
          <Nav.Button icon={<Chart_3D32 />} />
          <Nav.Button colour="alertbad" icon={<LinuxAlt32 />} />
        </Navbar.Right>
      </Navbar>
      <Reader mode="narrow">
        <Row>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>The Chrysler PT Cruiser is a front-engine, front-wheel drive, small family car/compact MPV manufactured and marketed internationally by Chrysler in 5-door hatchback (2000–2010) and 2-door convertible (2005–2008) body styles—over a single generation, with an intermediate facelift for model year 2006.</p>
          <p style={{ fontFamily: 'Poppins' }}>Noted for its exterior recalling styling from the 1930s, the PT Cruiser was designed by Bryan Nesbitt. The interior packaging was noted for its high-roof, high h-point seating, and flexible cargo and passenger configurations—a multi-level cargo shelf as well as fold, tumble and removable rear seating.</p>
        </Row>
        <Row>
          <Button>Button</Button>
          <Button size="sm" colour="accent">Button</Button>
          <Button size="lg" colour="alertgood">Button</Button>
          <Button colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button style="border">Button</Button>
          <Button size="sm" style="border" colour="accent">Button</Button>
          <Button size="lg" style="border" colour="alertgood">Button</Button>
          <Button style="border" colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button proceed>Button</Button>
          <Button size="sm" proceed colour="accent">Button</Button>
          <Button size="lg" proceed colour="alertgood">Button</Button>
          <Button proceed colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button proceed style="border">Button</Button>
          <Button size="sm" proceed style="border" colour="accent">Button</Button>
          <Button size="lg" proceed style="border" colour="alertgood">Button</Button>
          <Button proceed style="border" colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button style="underline">Button</Button>
          <Button style="underline" colour="accent">Button</Button>
          <Button style="underline" colour="alertgood">Button</Button>
          <Button style="underline" colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button style="link">Button</Button>
          <Button style="link" colour="accent">Button</Button>
          <Button style="link" colour="alertgood">Button</Button>
          <Button style="link" colour="alertbad">Button</Button>
        </Row>
        <Row>
          <Button style="icon"><Add32 /></Button>
          <Button size="sm" style="icon" colour="accent"><Email32 /></Button>
          <Button size="lg" style="icon" colour="alertgood"><Calendar32 /></Button>
          <Button style="icon" colour="alertbad"><LetterPp32 /></Button>
        </Row>
        <Row>
          <Button style="icon-only"><DocumentBlank32 /></Button>
          <Button size="sm" style="icon-only" colour="accent"><Csv32 /></Button>
          <Button size="lg" style="icon-only" colour="alertgood"><Settings32 /></Button>
          <Button style="icon-only" colour="alertbad"><RequestQuote32 /></Button>
        </Row>
        <Form testProp="hi">
          <Form.Group>
            <Form.Input placeholder="form input" label="form label"/>
          </Form.Group>
          <Form.Input valid placeholder="valid input"/>
          <Form.Input invalid placeholder="invalid input"/>
        </Form>
      </Reader>
    </Screen>
  );
}

/**
 * Quick mock logo.
 * 
 * @component
 */
const Logo = () => <><span style={{ fontFamily: "Chivo", color: "#000", fontSize: 36 }}>Collect</span> <span style={{ fontFamily: "Chivo", color: "#00E2FF", fontSize: 36 }}>Pro</span></>;
