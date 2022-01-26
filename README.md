# clinical:example-plugin

This is an example plugin for Node on FHIR.  It will provides an example reference of how to create:

- an HTTP REST endpoint  
- a database collection  
- server side publication  
- client side subscription  
- a reactive user interface  
- custom settings files  

When implemented, you will be able to post data to the REST endpoint, and see the user interface automatically update to reflect the changes.  

#### Clone the Example Plugin      

```bash
# download the Meteor on FHIR Community Server
git clone http://github.com/clinical-meteor/node-on-fhir

cd node-on-fhir
cd packages

# install the example plugin
git clone http://github.com/clinical-meteor/example-plugin 

cd ..

# install dependencies
npm install


# run Node on FHIR Community Server using the example plugin
meteor run --settings packages/example-plugin/configs/settings.example.json --extra-packages clinical:example-plugin

# permanently add the example plugin to the project
meteor add clinical:example
```

#### Customize the Plugin      

```bash
# Step 1 - Rename package folder
packages/example-plugin

# Step 2 - Update package name, description
packages/my-plugin/package.js

# Step 3 - Customize the HelloWorld Page
packages/my-plugin/client/HelloWorldPage.jsx

# Step 4 - Update your routes if you wish
packages/my-plugin/index.jsx

# Step 5 - Edit the settings file; add custom route, etc.
packages/my-plugin/configs/settings.example.jsx
```


#### Run Node on FHIR with your plugin  

```bash
# add your package
meteor add foo:my-plugin
npm install

# run with a custom settings file
meteor run --settings packages/my-plugin/configs/settings.example.json
```

#### Example: Body Mass Index - Data Pipeline  

The BodyMassIndex calculator relies on [SMART on FHIR](http://docs.smarthealthit.org/) to fetch [FHIR Patient](https://www.hl7.org/fhir/patient.html) and [FHIR Observation](https://www.hl7.org/fhir/observation.html) resources.  We then create a [FHIR RiskAssessment](https://www.hl7.org/fhir/riskassessment.html) for obesity.  When fetching from an upstream FHIR Server, the overall data architecture and sequence diagram looks like the following.

![BodyMassIndex Data Pipeline](https://raw.githubusercontent.com/symptomatic/example-plugin/master/assets/Body%20Mass%20Index%20Calculator%20Plugin%20-%20New%20Page.png)  
