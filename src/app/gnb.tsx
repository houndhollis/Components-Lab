'use client';

import { ChildrenRoute, gnbRootList, isParentRoute, ParentRoute, ROUTE, routes } from "@/routes";
import Link from "next/link";
import classNames from "classnames";
import { useParams } from "next/navigation";

const ParentGnbItem = ({name, link, children} : ParentRoute) => {
  return (
    <li className={classNames('parent', `items-${children.length}`)}>
      <Link href={link}>
        {name} 
      </Link>
      <ul className="subRoutes">
        {children.map(r => {
          const route = routes[r];
          return <GnbItem {...route} key={route.key}/>
        })}
      </ul>
    </li>
  )
}

const ChildrenGnbItem = ({link, name} : ChildrenRoute) => {
  return (
    <li>
      <Link href={link}>
        {name} 
      </Link>
    </li>
  )
}

const GnbItem = (route : ROUTE) => {
  return isParentRoute(route) ? <ParentGnbItem {...route}/> : <ChildrenGnbItem {...route}/>
}


const GnbPage = () => {

  const {item = []} = useParams();
  const currentPath = ['',...item].join('/');


  return (
    <aside>
      <h1>UI 요소 모음</h1>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem {...r} key={r.key}/>
        ))}
      </ul>
    </aside>
  )
}

export default GnbPage;