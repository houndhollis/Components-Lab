export const routePaths = ['/','/test1','/test2','/test2/vanila','/test2/react'] as const;

type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key : ROUTE_PATH,
  link : ROUTE_PATH,
  name : string,
}

export type ParentRoute = BaseRoute & {
  children : ROUTE_PATH[],
}

export type ChildrenRoute = BaseRoute & {
  children: ((props : unknown) => JSX.Element) | null,
}

export type ROUTE = ParentRoute | ChildrenRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/' : {
    key: '/',
    link: '/',
    name : 'root',
    children: ['/test1', '/test2'],
  },
  '/test1' : {
    key: '/test1',
    link : '/test1',
    name : '테스트1',
    children: null
  },
  '/test2' : {
    key: '/test2',
    link : '/test2',
    name : '테스트2',
    children: ['/test2/vanila', '/test2/react']
  },
  '/test2/vanila' : {
    key: '/test2/vanila',
    link : '/test2/vanila',
    name : 'vanila',
    children: null,
  },
  '/test2/react' : {
    key: '/test2/react',
    link : '/test2/react',
    name : 'react',
    children: null,
  }
}

export const isParentRoute = (route : ROUTE) : route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map((r) => routes[r]);