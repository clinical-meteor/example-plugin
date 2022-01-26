
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import moment from 'moment';
import { get } from 'lodash';

import SimpleSchema from 'simpl-schema';
import { BaseSchema, DomainResourceSchema } from 'meteor/clinical:hl7-resource-datatypes';


import { 
    FhirUtilities, 
    Observations
} from 'meteor/clinical:hl7-fhir-data-infrastructure';

if(Meteor.isClient){
  Meteor.subscribe('Observations');  
}

if(Meteor.isServer){  
  let defaultQuery = {};
  let defaultOptions = {limit: 5000}

  Meteor.publish('Observations', function(){
    return Observations.find(defaultQuery, defaultOptions);
  });    
}