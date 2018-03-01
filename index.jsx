import SamplePage from './client/SamplePage.jsx';
import PostcardPage from './client/PostcardPage.jsx';

var DynamicRoutes = [{
  'name': 'SampleRoute',
  'path': '/example-route',
  'component': PostcardPage
}];

var SidebarElements = [{
  'primaryText': 'Example Page',
  'to': '/example-route',
  'href': '/example-route'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage };
