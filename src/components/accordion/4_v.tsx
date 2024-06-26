import { Fragment, useState } from "react";
import VanilaWrapper from "../vaniilaWrapper";
import cx from "./cx";
import data from "./data";

type AccordionItemType = {
  id : string,
  title: string,
  description: string,
}

const ItemBuilder = ({id, title, description} : AccordionItemType) => {

  const $li = document.createElement('li');
  $li.classList.add(cx('item'),cx('item3'));
  $li.setAttribute('data-id', id);

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $description = document.createElement('div');
  $description.classList.add(cx('description'));
  $description.textContent = description

  $li.append($tab, $description);
  return $li
}

const initiator = (wrapper: HTMLDivElement) => {

  let currentId: string | null = null;

  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const handleClickTab = (e:Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;
    const targetId = $el.parentElement!.dataset.id;
    if(!targetId) return;

    currentId = targetId === currentId ? null : targetId;

    $items.forEach((item) => 
      item.classList.toggle(cx('current'), item.dataset.id === currentId)
    )
  }

  $ul.addEventListener('click', handleClickTab);

  // const $items = data.map((d) => ItemBuilder(d)) 아래랑 같음,
  const $items = data.map(ItemBuilder); 
  $ul.append(...$items);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click()
}

const Accordion4V = () => <VanilaWrapper title='#4'  initiator={initiator}/>

export default Accordion4V