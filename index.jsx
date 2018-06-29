import HelloWorldPage from './client/HelloWorldPage.jsx';
import PostcardPage from './client/PostcardPage.jsx';
import BodyMassIndexPage from './client/BodyMassIndexPage.jsx';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/hello-world',
  'component': HelloWorldPage
}, {
  'name': 'BodyMassIndexPage',
  'path': '/body-mass-index',
  'component': BodyMassIndexPage
}];

var SidebarElements = [{
  'primaryText': 'Example Page',
  'to': '/hello-world',
  'href': '/hello-world'
}, {
  'primaryText': 'Body Mass Calculator',
  'to': '/body-mass-index',
  'href': '/body-mass-index'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage, BodyMassIndexPage };
