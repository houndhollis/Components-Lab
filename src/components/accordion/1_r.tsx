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

const AccordionItem = ({id, title, description, current, toggleItem} : AccordionItemType) => {
  return (
    <li 
      className={cx('item', {current})} 
      key={id}
    >
      <div 
        className={cx('tab')}
        onClick={() => toggleItem(id)}
      >
        {title}
      </div> 
      {current ? (
        <div className={cx('description')}>
          {description}
        </div>
      ) : null}
    </li>
  )
}

const Accordion1 = () => {

  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id:string) => {
    setCurrentId((prev) => prev === id ? null : id);
  }

  return (
    <Fragment>
      <h3>#1. React</h3>
      <ul className={cx('container')}>
        {data.map((d) => (
          <AccordionItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            toggleItem={toggleItem}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default Accordion1;