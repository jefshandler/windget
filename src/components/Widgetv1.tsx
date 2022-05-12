import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";

// conceito estado
export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }
  return (
    <div className="absolute bottom-5 right-5">
     {/* { isWidgetOpen ? <p>Oi todo mundo</p> :null } */}
      { isWidgetOpen && <p>Oi todo mundo</p>  }
      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-600 ease-linear">
          <span className="pl-2 ">Feedback</span>
        </span>
      </button>
    </div>
  );
}
