"use client";

import React, {useState} from 'react';
import {FAQItem} from "@/components/game/frequency-asked-question/faq/FAQItem";
import {FAQItemList} from "@/components/game/frequency-asked-question/faq/FAQItemList";



export const FAQListSection = () => {
  const [toggleFAQState, setToggleFAQState] = useState(() => Array(FAQItemList.length).fill(false));

  const toggleFAQStateHandler = (num: number) => () => {
    setToggleFAQState((prev) => prev.map((state, index) => index === num ? !state : state))
  }


  return (
      <div className={"flex flex-col"}>
        {
          FAQItemList.map((item, idx) => (
              <FAQItem key={item.question} question={item.question} isOpened={toggleFAQState[idx]}
                       onClick={toggleFAQStateHandler(idx)}
                       isLast={idx === FAQItemList.length - 1}>
                {item.children}
              </FAQItem>
          ))
        }
      </div>
  );
};


