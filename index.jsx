import SamplePage from './client/SamplePage.jsx';

var DynamicRoutes = [{
  'name': 'SampleRoute',
  'path': '/example-route',
  'component': SamplePage
}];

var SidebarElements = [{
  'primaryText': 'Example Page',
  'to': '/example-route',
  'href': '/example-route'
}];

export { SidebarElements, DynamicRoutes, SamplePage };
