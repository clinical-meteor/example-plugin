import HelloWorldPage from './client/HelloWorldPage';
import PostcardPage from './client/PostcardPage';
import BodyMassIndexPage from './client/BodyMassIndexPage';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/hello-world',
  'component': HelloWorldPage
}, {
  'name': 'BodyMassIndexPage',
  'path': '/body-mass-index',
  'component': BodyMassIndexPage
}];

var SidebarElements = [];

let SidebarWorkflows = [{
  'primaryText': 'Example Page',
  'to': '/hello-world',
  'href': '/hello-world'
}, {
  'primaryText': 'Body Mass Calculator',
  'to': '/body-mass-index',
  'href': '/body-mass-index'
}];

export { SidebarWorkflows, SidebarElements, DynamicRoutes, SamplePage, PostcardPage, BodyMassIndexPage };
