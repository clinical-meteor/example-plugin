Package.describe({
    name: 'clinical:example-plugin',
    version: '0.3.1',
    summary: 'Example Node on FHIR plugin, with dynamic routes and UI elements.',
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
     
    api.use('clinical:hl7-fhir-data-infrastructure');

    api.use('aldeed:collection2@3.0.0');
    api.use('simple:json-routes@2.1.0');

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
    'react-katex': '2.0.2'
})