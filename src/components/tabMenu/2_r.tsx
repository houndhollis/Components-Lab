import { Fragment, useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionItemType = {
  id : string,
  title: string,
  description: string,
  current: boolean,
  toggleItem: (id :string) => void
}

const TabItem = ({id, title, description, current, toggleItem} : AccordionItemType) => {
  return (
    <li 
      className={cx('tab', {current})} 
      key={id}
      onClick={() => toggleItem(id)}
    >
      {title}
    </li>
  )
}

const TabMenu2 = () => {

  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id:string) => {
    setCurrentId((prev) => prev === id ? null : id);
  }

  return (
    <Fragment>
      <h3>#2. React <sub>css 로 탭메뉴 숨김/보임 처리</sub></h3>
      <div className={cx('container', 'tabMenu2')}>
        <ul className={cx('tabList')}>
          {data.map((d) => (
            <TabItem
              key={d.id}
              {...d}
              current={currentId === d.id}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
        {data.map((d) => (
          <div key={d.id} className={cx('description', {current: currentId === d.id})}>{d.description}</div>
        ))}
      </div>
    </Fragment>
  )
}

export default TabMenu2;