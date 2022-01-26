Package.describe({
    name: 'symptomatic:example-plugin',
    version: '0.3.0',
    summary: 'Example Symptomatic plugin, with dynamic routes and UI elements.',
    git: 'https://github.com/symptomatic/example-plugin',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-base@1.4.0');
    api.use('ecmascript@0.13.0');
    api.use('react-meteor-data@2.1.2');
    api.use('session');
    api.use('mongo');
    
     
    api.use('clinical:hl7-fhir-data-infrastructure');

    api.use('aldeed:collection2@3.0.0');
    api.use('simple:json-routes@2.1.0');

    api.addFiles('lib/collection.js');

    api.addFiles('server/methods.js', 'server');
    api.addFiles('server/rest.js', 'server');

    api.addFiles('assets/asclepius.png', "client", {isAsset: true});    
    api.mainModule('index.jsx', 'client');
});


Npm.depends({
    "@nivo/core": "0.61.0",
    "@nivo/line": "0.61.1",
    'react-katex': '2.0.2'
})