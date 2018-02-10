Package.describe({
    name: 'clinical:example-plugin',
    version: '0.1.1',
    summary: '',
    git: 'https://github.com/clinical-meteor/example-plugin',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-platform');
    api.use('ecmascript');
    api.use('react-meteor-data');
    api.use('session');
    api.use('mongo');

    api.use('clinical:glass-ui');

    api.addFiles('server/methods.js', 'server');
    api.addFiles('assets/asclepius.png', "client", {isAsset: true});    
    api.mainModule('index.jsx', 'client');
});          

Npm.depends({
    "material-ui": "0.20.0",
    "lodash": "4.17.4"
});

