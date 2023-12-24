import { Container, Grid, CardHeader, CardContent, Typography } from '@material-ui/core';

import { StyledCard, PageCanvas, DynamicSpacer } from 'fhir-starter';


import React, { useState } from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin from 'react-mixin';
import { browserHistory } from 'react-router';

import { get } from 'lodash';

import { Session } from 'meteor/session';

import "ace-builds";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export function EditorPage(props){
  let headerHeight = 84;
  if(get(Meteor, 'settings.public.defaults.prominantHeader')){
    headerHeight = 148;
  }  

  let [editorText, setEditorText] = useState("");

  function openLink(url){
    console.log("openLink", url);
    browserHistory.push(url);
  }

  
  function onEditorChange(newValue){
    console.log('onEditorChange', newValue)
    setEditorText(newValue)
  }

  return (
    <PageCanvas id='EditorPage' headerHeight={headerHeight} >
      <Container style={{marginBottom: '84px', paddingBottom: '84px'}}>
        <Grid container justify="center" >
          <Grid item md={12}>          
            <StyledCard scrollable margin={20} >
              <CardHeader title="Editor" />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <AceEditor
                    mode="text"
                    theme="github"
                    wrapEnabled={true}
                    onChange={onEditorChange}
                    name="synthesisEditor"
                    editorProps={{ $blockScrolling: true }}
                    value={editorText}
                    style={{width: '100%', position: 'relative', height: '400px', minHeight: '200px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
                  />   
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </PageCanvas>
  );
}


export default EditorPage;