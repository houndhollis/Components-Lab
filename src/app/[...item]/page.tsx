'use client';

import { isParentRoute, routes, ROUTE_PATH } from "@/routes";

const ItemPage = ({params: {item}}: {params : {item : string[]}} ) => {
  
  const path = ['', ...item].join('/') as ROUTE_PATH;
  const route = routes[path];
  
  if (!route || isParentRoute(route)) {
    console.log('잘못된 라우터');
    return null;
  };
  
  const {children : Component} = route;
  
  return Component ? <Component/> : null;
}

export default ItemPage

// router 주소에 ... 이 들어가면 /asd/aczxad 다 여기로 오게됨