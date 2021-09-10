import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {FaVuejs,FaGitAlt} from "react-icons/fa";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiSqllite,
  DiJava,
  
} from "react-icons/di";
import { SiLaravel,SiPhp,SiMysql,SiOracle,SiMicrosoftsqlserver,SiBootstrap,SiIonic } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIonic />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
