Package.describe({
    name: 'clinical:example-plugin',
    version: '0.4.0',
    summary: 'Example plugin for Node on FHIR',
    git: 'https://github.com/clinical-meteor/example-plugin',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor@1.10.0');
    api.use('webapp@1.13.0');
    api.use('ecmascript@0.16.0');
    api.use('react-meteor-data@2.4.0');

    api.use('session');
    api.use('mongo');    
    api.use('http');    
     
    api.use('clinical:hl7-fhir-data-infrastructure@6.20.7');
    api.use('clinical:json-routes@2.2.0');

    api.use('aldeed:collection2@3.5.0');

    api.addFiles('lib/collections.js');
    api.addFiles('lib/Notes.js');

    api.addFiles('server/methods.js', 'server');
    api.addFiles('server/rest.js', 'server');

    api.addAssets('data/jason.argonaut.sample.ccd', 'server');

    api.addFiles('assets/asclepius.png', "client", {isAsset: true});    
    api.mainModule('index.jsx', 'client');
});


Npm.depends({
    "@nivo/core": "0.61.0",
    "@nivo/line": "0.61.1",
    "react-katex": "2.0.2",
    "react-ace": "10.1.0"
})