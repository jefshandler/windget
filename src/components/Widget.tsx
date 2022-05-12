import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "../components/WidgetForm";

// conceito estado
export function Widget(){
 return (
    <Popover className="absolute bottom-4 right-4 mb:botton-8 md:right-8 flex flex-col items-end">
     {/* { isWidgetOpen ? <p>Oi todo mundo</p> :null } */}
      {/* { isWidgetOpen && <p>Oi todo mundo</p>  } */}
      <Popover.Panel> 
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-600 ease-linear">
          <span className="pl-2 ">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
