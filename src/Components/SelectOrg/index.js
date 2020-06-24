import React from "react";
import Logo from "../../Assets/logo.svg";
import BLM from "../../Assets/BLM.png";
import BAJI from "../../Assets/BAJI.png";
import COC from "../../Assets/COC.png";
import MBL from "../../Assets/MBL.png";
import LDF from "../../Assets/LDF.png";
import UBM from "../../Assets/UBM.png";
import NBO from "../../Assets/NBO.png";
import { Input } from 'antd';
import "./style.less";

const { Search } = Input;

const SelectOrg = ({ history }) => {

  const handleAddOrg = () => {
    history.push("/settings");
  }

  return (
    <div className="select-org">
      <img src={Logo} alt="Make Cents Logo" className="logo" />
      <div className="select-org-form">
        <h1 className="select-org-title">Select the organization you want to donate to</h1>
        <Search
          className="search-bar"
          placeholder="Search"
          onSearch={value => console.log(value)}
        />
        <div className="all-orgs">
          <div className="org">
            <div className="org-logo-container">
              <a href="https://blacklivesmatter.com/" target="_blank" rel="noopener noreferrer">
                <img src={BLM} alt="BLM" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">Black Lives Matter</h2>
              <p className="org-description">Black Lives Matter Foundation, Inc is a global organization in the US,
              UK, and Canada, whose mission is to eradicate white supremacy and build
              local power to intervene in violence inflicted on Black communities by
                the state and vigilantes.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://baji.org/" target="_blank" rel="noopener noreferrer">
                <img src={BAJI} alt="BAJI" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">Black Alliance for Just Immigration</h2>
              <p className="org-description">The Black Alliance for Just Immigration (BAJI) educates and engages African
              American and black immigrant communities to organize and advocate for racial, social, and economic justice.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://colorofchange.org/" target="_blank" rel="noopener noreferrer">
                <img src={COC} alt="COC" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">Color of Change</h2>
              <p className="org-description">Color of Change helps people respond effectively to injustice in the world
              around us. As a national online force driven by more than 1.5 million members, Color of Change moves decision-makers
                in corporations and government to create a more human and less hostile world for Black people in America.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://m4bl.org/" target="_blank" rel="noopener noreferrer">
                <img src={MBL} alt="MBL" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">The Movement for Black Lives</h2>
              <p className="org-description">The Movement for Black Lives (M4BL) formed in December of 2014, was created as a
              space for Black organizations across the country to debate and discuss the current political conditions, develop
              shared assessments of what political interventions were necessary in order to achieve key policy, cultural and political
              wins, convene organizational leadership in order to debate and co-create a shared movement wide strategy. Under the fundamental
                  idea that we can achieve more together than we can separately.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://www.naacpldf.org/" target="_blank" rel="noopener noreferrer">
                <img src={LDF} alt="LDF" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">NAACP Legal Defense and Educational Fund, Inc.</h2>
              <p className="org-description">The NAACP Legal Defense and Educational Fund, Inc. is America’s premier legal organization fighting
              for racial justice. Through litigation, advocacy, and public education, LDF seeks structural changes to expand democracy, eliminate
              disparities, and achieve racial justice in a society that fulfills the promise of equality for all Americans. LDF also defends the
                 gains and protections won over the past 75 years of civil rights struggle and works to improve the quality and diversity of judicial and executive appointments.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://undocublack.org/" target="_blank" rel="noopener noreferrer">
                <img src={UBM} alt="UBM" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">UndocuBlack Network</h2>
              <p className="org-description">The UndocuBlack Network is a multigenerational network of currently and formerly undocumented Black people
               that fosters community, facilitates access resources, and contributes to transforming the realities of our people, so we are thriving and living our fullest lives.</p>
            </div>
          </div>
          <div className="org">
            <div className="org-logo-container">
              <a href="https://secure.actblue.com/donate/freeblackmamas2020" target="_blank" rel="noopener noreferrer">
                <img src={NBO} alt="NBO" className="org-logo" />
              </a>
            </div>
            <div className="org-description-container" onClick={handleAddOrg}>
              <h2 className="org-title">National Bail Out</h2>
              <p className="org-description">National Bail Out is a Black-led and Black-centered collective of abolitionist
               organizers, lawyers and activists building a community-based movement to support our folks and end systems of pretrial detention and ultimately mass incarceration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SelectOrg;
