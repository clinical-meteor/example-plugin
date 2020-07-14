import { Grid, CardHeader, CardContent, Typography } from '@material-ui/core';

import { StyledCard, PageCanvas, DynamicSpacer } from 'material-fhir-ui';


import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin from 'react-mixin';
import { browserHistory } from 'react-router';

import { get } from 'lodash';

import { Session } from 'meteor/session';



export class HelloWorldPage extends React.Component {
  constructor(props) {
    super(props);
  }
  getMeteorData() {

    let imgHeight = (Session.get('appHeight') - 210) / 3;

    let data = {
      style: {
        page: {},
        coverImg: {
          maxWidth: 'inherit',
          maxHeight: 'inherit',
          height: 'inherit'
        },
        cards: {
          media: {
            height: (imgHeight - 1) + 'px',
            overflowY: 'hidden',
            objectFit: 'cover'
          },
          practitioners: {
            cursor: 'pointescale-downr',
            height: imgHeight + 'px',
            overflowY: 'hidden',
            objectFit: 'cover'
          },
          organizations: {
            cursor: 'pointer',
            height: imgHeight + 'px',
            overflowY: 'hidden',
            objectFit: 'cover'
          },
          locations: {
            cursor: 'pointer',
            height: imgHeight + 'px',
            overflowY: 'hidden',
            objectFit: 'cover'
          }
        },
        inactiveIndexCard: {
          opacity: .5,
          width: '100%',
          display: 'inline-block',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: '0px'
        },
        tile: {
          width: '100%',
          display: 'inline-block',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: '0px',
          marginBottom: '20px',
          height: imgHeight + 'px'
        },
        spacer: {
          display: 'block'
        }
      },
      organizations: {
        image: "/pages/provider-directory/organizations.jpg"
      }
    };

    if(process.env.NODE_ENV === "test") console.log("HelloWorldPage[data]", data);
    return data;
  }
  render() {

    let headerHeight = 84;
    if(get(Meteor, 'settings.public.defaults.prominantHeader')){
      headerHeight = 148;
    }  

    return (
      <PageCanvas id='helloWorldPage' headerHeight={headerHeight} >
        <Grid container justify="center">
          <Grid item md={4}>
          <StyledCard height='auto'>
              <CardHeader 
                title="Blank Canvas - Build Your Own Module" 
                style={{fontSize: '100%'}} />
              <CardContent style={{fontSize: '100%'}}>

                <p>Node on FHIR has an internal architecture similar to the original WordPress software.  That is, it includes base template that is kept open source, and includes a plugin architecture where people can develop custom or proprietary content. </p>

                <h4>Features</h4>
                <ul>
                  <li>Open source template.  MIT licensed.  </li>              
                  <li>Private plugins for your intellectual property datasets, use cases, algorithms</li>              
                  <li>Build pipelines for desktop apps, smartphones, tablets, and webtv/videowalls.</li>              
                  <li>Fast Healthcare Interoperability Resources (HL7 FHIR) data interoperability layer.</li>
                  <li>Library of FHIR widgets to build your workflow with.</li>              
                  <li>Base template kept under quality control. </li>
                  <li>Kept up-to-date on security patches and library upgrades</li>
                  <li>Desgined with HIPAA scale out strategy (single-user to datalakes).</li>              
                  <li>Ready to go to integrate with Cerner, Epic, and Apple App Stores</li>              
                  <li>Deployable as a docker instance.</li>              
                  <li>Supports dashboards, advanced visualizations, and real time graphs.</li>              
                  <li>Designed by bioinformatics students at UChicago.</li>              
                </ul>
                <br />

                <h4>Getting Started</h4>
                <ul>                           
                  <li>
                    <a href="https://guide.meteor.com/" >Meteor Guide (Tutorials)</a>                              
                  </li>                                       
                  <li>
                    <a href="https://github.com/clinical-meteor/software-development-kit/blob/master/cookbook/creating.a.symptomatic.plugin.md" >Creating a Plugin</a>                              
                  </li>              
                  <li>
                    <a href="https://github.com/clinical-meteor/example-plugin" >Example Plugin</a>                              
                  </li>                                               
                  <li>
                    <a href="https://www.hl7.org/fhir/resourcelist.html" >FHIR Resource List (Healthcare API)</a>                              
                  </li>              
                </ul> 
                <br />

                <h4>Getting Help</h4>
                <ul>
                  <li>
                    <a href="https://github.com/clinical-meteor/meteor-on-fhir/issues" >File a Technical Issue or Bug</a>                              
                  </li>              
                  <li>
                    <a href="https://www.meetup.com/Javascript-Healthcare-Hackathons/" >Chicago Javascript Healthcare Hackathons</a>
                  </li>              
                  <li>
                    <a href="http://forums.meteor.com" >Meteor Support Forums</a>
                  </li>              
                  <li>
                    <a href="http://http://community.fhir.org/" >FHIR Community Forum</a>
                  </li>              
                  <li>
                    <a href="http://chat.fhir.org" >FHIR Chat</a>
                  </li>              
                </ul>                            
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </PageCanvas>
    );
  }
  openLink(url){
    console.log("openLink", url);
    browserHistory.push(url);
  }
}

ReactMixin(HelloWorldPage.prototype, ReactMeteorData);
export default HelloWorldPage;