import { Fragment, useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionItemType = {
  id : string,
  title: string,
  description: string,
  initailChecked: boolean,
}

const AccordionItem = ({id, title, description, initailChecked} : AccordionItemType) => {
  return (
    <li className={cx('item','item5')} key={id}>
      <input defaultChecked={initailChecked} className={cx('input')} type='radio' name="accordion" id={id}/>
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label> 
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const Accordion5 = () => {
  return (
    <Fragment>
      <h3>#5. React<sub>Html 로 처리</sub></h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordionItem
            key={d.id}
            {...d}
            initailChecked={i === 0}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default Accordion5;