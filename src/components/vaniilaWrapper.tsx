import { useEffect, useRef } from "react";

const VanilaWrapper = ({initiator, title = ''} : {initiator :(wrapper: HTMLDivElement) => void; title?: string}) => {
  
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  },[initiator]);

  return (
    <>
      {title && <h3>{title}. Vanilla</h3>}
      <div ref={wrapper}/>
    </>
  )
}

export default VanilaWrapper;