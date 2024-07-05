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

const TabItem = ({id, title, current, toggleItem} : AccordionItemType) => {
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

const TabMenu1 = () => {

  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id:string) => {
    setCurrentId((prev) => prev === id ? null : id);
  }

  const currentDescription = data.find((item) => item.id === currentId)?.description || '';

  return (
    <Fragment>
      <h3>#1. React <sub>현재 desc만 html로 그리기</sub></h3>
      <div className={cx('container')}>
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
        <div className={cx('description')}>{currentDescription}</div>
      </div>
    </Fragment>
  )
}

export default TabMenu1;