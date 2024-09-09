import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Asesor() {
  const tasks = [
    {
      text: "Center Flowers is a company dedicated to selling flowers and floral products, both wholesale and retail.",
      keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
    },
    {
      text: "Where I worked as a wholesale/retail salesperson, floral arrangement maker, and handled phone customer service.",
      keywords: [""],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Center Flowers S.A <span className="text-AAsecondary">@ Asesor comercial</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2015 - Aug 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
