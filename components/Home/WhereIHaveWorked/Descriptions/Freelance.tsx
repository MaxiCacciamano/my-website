import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
  const tasks = [
    {
      text: "I specialize in web development using NOCODE platforms like WordPress.",
      keywords: ["WordPress"],
    },
    {
      text: "I ensure the scalability of the site and organize meetings with clients to follow up and plan projects.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Independent Web Developer <span className="text-AAsecondary">@  Freelance</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">july 2023</span>
          {/*<span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.trouvetavoie.io/", "_blank")}
          >
            www.trouvetavoie.io
          </span>*/}
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
