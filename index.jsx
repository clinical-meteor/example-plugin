import HelloWorldPage from './client/HelloWorldPage.jsx';
import PostcardPage from './client/PostcardPage.jsx';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/hello-world',
  'component': HelloWorldPage
}];

var SidebarElements = [{
  'primaryText': 'Example Page',
  'to': '/hello-world',
  'href': '/hello-world'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage };
