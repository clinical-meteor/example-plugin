
import { Meteor } from 'meteor/meteor';
// import { Endpoints, Practitioners, Organizations, HealthcareServices, InsurancePlans, Networks, Locations, OrganizationAffiliations, PractitionerRoles } from 'meteor/clinical:hl7-fhir-data-infrastructure'

JsonRoutes.add("get", "/ping", function (req, res, next) {
    console.log('GET ' + '/ping');

    res.setHeader('Content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");

    let returnPayload = {
      code: 200,
      data: {
        message: "pong!"
      }
    }
   
    JsonRoutes.sendResult(res, returnPayload);
});

