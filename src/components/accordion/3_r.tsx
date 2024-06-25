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
      className={cx('item','item3', {current})} 
      key={id}
    >
      <div 
        className={cx('tab')}
        onClick={() => toggleItem(id)}
      >
        {title}
      </div> 
      <div className={cx('description', {current})}>
        {description}
      </div>
    </li>
  )
}

const Accordion3 = () => {

  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id:string) => {
    setCurrentId((prev) => prev === id ? null : id);
  }

  return (
    <Fragment>
      <h3>#3. React<sub>css로 처리</sub></h3>
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

export default Accordion3;