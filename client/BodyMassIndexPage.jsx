
import { Button, Grid, CardHeader, CardContent, Typography } from '@material-ui/core';
import { StyledCard, PageCanvas } from 'fhir-starter';

import React, { useState } from 'react';
import { ReactMeteorData, useTracker } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import { get } from 'lodash';
import moment from 'moment';

import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { DynamicSpacer, ObservationsTable } from 'meteor/clinical:hl7-fhir-data-infrastructure';

import { Line } from '@nivo/line'


// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

export function BodyMassIndexPage(props){

  let [heightPage, setHeightPage] = useState(0);
  let [weightPage, setWeightPage] = useState(0);
  
  let data = {
    chart: {
      width: Session.get('appWidth') * 0.5,  
      height: 400
    },
    organizations: {
      image: "/pages/provider-directory/organizations.jpg"
    },
    bmi: {
      height: 0,
      weight: 0
    },
    heightObservations: [],
    weightObservations: [],
    observationsCount: 0
  };

  data.chart.width = useTracker(function(){
    return Session.get('appWidth') * 0.5;
  }, [])

  data.bmi.weight = useTracker(function(){
      let recentWeight = Observations.find({'code.text': 'Weight'}, {sort: {effectiveDateTime: 1}}).fetch()[0];
      return get(recentWeight, 'valueQuantity.value', null);
  }, []);

  data.bmi.height = useTracker(function(){
    let recentHeight = Observations.find({'code.text': 'Height'}, {sort: {effectiveDateTime: 1}}).fetch()[0];
    return get(recentHeight, 'valueQuantity.value', null);
  }, []);

  data.heightObservations = useTracker(function(){
    return Observations.find({'code.text': 'Height'}, {sort: {effectiveDateTime: 1}}).fetch();
  }, []);

  data.weightObservations = useTracker(function(){
    return Observations.find({'code.text': 'Weight'}, {sort: {effectiveDateTime: 1}}).fetch();
  }, []);

  data.observationsCount = useTracker(function(){
    return Observations.find().count();
  }, []);

  let observationQuery = {$or: [{'code.text': 'Height'}, {'code.text': 'Weight'}]}
  let bmi = (data.bmi.weight / data.bmi.height / data.bmi.height * 10000).toFixed(2);


  function openLink(url){
    console.log("openLink", url);
    browserHistory.push(url);
  }
  function handleInitializeData(){
    // alert('Initialize!')
    Meteor.call('initializeBodyMassIndexData')

  }

  let headerHeight = 84;
  if(get(Meteor, 'settings.public.defaults.prominantHeader')){
    headerHeight = 148;
  }

  let dataManagementElements;
  if(data.observationsCount > 0){
    dataManagementElements = <Grid container spacing={8} style={{marginTop: '0px', marginBottom: '84px', paddingBottom: '84px'}}>            
      <Grid item md={6}>
        <StyledCard margins={20} >
          <CardHeader 
            title="Height Observations"
            />
          <CardContent style={{fontSize: '180%'}}>
            <ObservationsTable 
              observations={data.heightObservations} 
              query={{$or: [{'code.text': 'Height'}]}} 
              hideSubjectReference={true}
              rowsPerPage={5}
              page={heightPage}
              count={data.heightObservations.length}
              onSetPage={function(index){
                setHeightPage(index)
              }}
  
              />
          </CardContent>
        </StyledCard>
        <DynamicSpacer />
        <StyledCard margins={20} >
          <CardHeader 
            title="Weight Observations"
            />
          <CardContent style={{fontSize: '180%'}}>
            <ObservationsTable 
              observations={data.weightObservations} 
              query={{$or: [{'code.text': 'Weight'}]}} 
              hideSubjectReference={true}
              rowsPerPage={5}
              page={weightPage}
              count={data.weightObservations.length}
              onSetPage={function(index){
                setWeightPage(index)
              }}
  
              />
          </CardContent>
        </StyledCard>    
      </Grid>
      <Grid item md={6}>
        <StyledCard margins={20} >
          <CardHeader 
            title="Body Mass Calculator"
            />
          <CardContent style={{fontSize: '180%'}}>
            <Line
              width={ data.chart.width}
              height={ data.chart.height}
              curve='cardinal'
              data={[
                {
                  "id": "weight",
                  "color": "hsl(122, 70%, 50%)",
                  "data": Observations.find({$or: [{'code.text': 'Weight'}]}, {sort: {effectiveDateTime: 1}}).map(function(observation){
                    return {
                      x: moment(get(observation, 'effectiveDateTime')).format('MMM DD, YYYY'),
                      y: get(observation, 'valueQuantity.value')
                    }
                  })
                }
              ]}
              margin={{
                  "top": 50,
                  "right": 110,
                  "bottom": 50,
                  "left": 60
              }}
              minY="auto"
              stacked={true}
              axisBottom={{
                  "orient": "bottom",
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "observation date",
                  "legendOffset": 36,
                  "legendPosition": "center"
              }}
              axisLeft={{
                  "orient": "left",
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "weight (kg)",
                  "legendOffset": -40,
                  "legendPosition": "center"
              }}
              dotSize={10}
              dotColor="inherit:darker(0.3)"
              dotBorderWidth={2}
              dotBorderColor="#ffffff"
              enableDotLabel={true}
              dotLabel="y"
              dotLabelYOffset={-12}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                  {
                      "anchor": "bottom-right",
                      "direction": "column",
                      "translateX": 100,
                      "itemWidth": 80,
                      "itemHeight": 20,
                      "symbolSize": 12,
                      "symbolShape": "circle"
                  }
              ]}
            />
            <DynamicSpacer />
          <div style={{width: '100%', textAlign: 'center'}}>
          <CardHeader title={"BMI = " + data.bmi.weight + " kg / " + data.bmi.height + "cm / " +  data.bmi.height + "cm * 10,000 = " + bmi } />
            <a href="https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html" style={{textDecoration: 'none', fontSize: '80%'}}>Centers for Disease Control - Body Mass Index Calculations</a>
          </div>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  } else {
    dataManagementElements = <Grid justify="center" container spacing={8} style={{marginTop: '0px', marginBottom: '80px'}}>            
      <Grid item md={6}>
        <CardHeader title="No Data" subheader='Click button to load sample patient into the database.' />
        <Button 
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleInitializeData.bind(this)}
          >Initialize</Button>
      </Grid>
    </Grid>
    
  }

  return (
      <PageCanvas id='bodyMassPage' headerHeight={headerHeight} >
        { dataManagementElements }
      </PageCanvas>
  );
}

export default BodyMassIndexPage;