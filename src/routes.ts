import Accordion from "./components/accordion";
import TabMenus from "./components/tabMenu";


export const routePaths = ['/','/accordion', '/tabMenu'] as const;

export type ROUTE_PATH = (typeof routePaths)[number]

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
    children: ['/accordion', '/tabMenu'],
  },
  '/accordion' : {
    key: '/accordion',
    link : '/accordion',
    name : '아코디언',
    children: Accordion
  },
  '/tabMenu' : {
    key: '/tabMenu',
    link : '/tabMenu',
    name : '탭메뉴',
    children: TabMenus
  },
}

export const isParentRoute = (route : ROUTE) : route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map((r) => routes[r]);