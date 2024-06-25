import Accordion from "./components/accordion";
import Test1 from "./components/test1";
import Test2_React from "./components/test2/react";
import Test2_Vanilla from "./components/test2/vanilla";

export const routePaths = ['/','/accordion'] as const;

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
    children: ['/accordion'],
  },
  '/accordion' : {
    key: '/accordion',
    link : '/accordion',
    name : '아코디언',
    children: Accordion
  },
}

export const isParentRoute = (route : ROUTE) : route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map((r) => routes[r]);