import { Observations } from 'meteor/clinical:hl7-fhir-data-infrastructure';

import { get, has } from 'lodash';

Meteor.methods({
    initializeBodyMassIndexData: function(){
        console.log('Initializing sample data...');

        let jasonArgonaut = JSON.parse(Assets.getText('data/jason.argonaut.sample.ccd'));
        // console.log('jasonArgonaut', jasonArgonaut);

        console.log('ResourceType: ', get(jasonArgonaut, 'resourceType'))
        if(get(jasonArgonaut, 'resourceType') === "Bundle"){
            console.log('Found a bundle')
            if(Array.isArray(jasonArgonaut.entry)){
                console.log('Parsing bundle entries....')
                jasonArgonaut.entry.forEach(function(entry){
                    if(get(entry, 'resource.resourceType') === "Observation"){
                        console.log('Found an Observation resource')
                        if(!Observations.findOne({id: get(entry, 'resource.id')})){
                            console.log('Not in database; inserting....')
                            Observations.insert(entry.resource, {filter: false, validate: false});
                        }
                    }
                })
            }
        } else {
            console.log('Not a bundle.')
        }
    },
    createNewNote: function(text){
        check(text, String);        
        console.log('createNewNote()', text);

        Notes.insert({
            resourceType: 'Note',
            note: text
        });
    }
});