"use client";
import { IconBell } from "@/components/icons/Bell";
import { IconHeart } from "@/components/icons/Heart";
import { LangContext } from "@/contexts/LangContext";
import { useLang } from "@/lib/useLang";
import Link from "next/link";
import React, { useContext, useRef } from "react";

export default function Home() {
  const langContext = useContext(LangContext);
  const refSelect = useRef<HTMLSelectElement>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col text-center mt-16 mb-8">
          <h1 className="text-4xl font-serif">{useLang("debateTools")}</h1>
          <p className="text-neutral-500 flex flex-row justify-center gap-[2px] select-none">
            {useLang("madeWith")}
            <IconHeart moreClass="scale-75" />
            {useLang("byPoznanDebaters")}
          </p>
        </div>
        <div className="flex flex-col w-fit mx-auto gap-2">
          <div className="flex flex-row justify-between text-neutral-500">
            <p>{useLang("language")}</p>
            <select
              className="bg-transparent"
              ref={refSelect}
              value={langContext.lang || "en"}
              onChange={() => {
                // langContext.setLang(refSelect.current?.value);
                switch (refSelect.current?.value) {
                  case "en":
                    langContext.setLang("en");
                    break;
                  case "pl":
                    langContext.setLang("pl");
                    break;
                  case "de":
                    langContext.setLang("de");
                    break;
                  case "jp":
                    langContext.setLang("jp");
                    break;
                }
              }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="pl">🇵🇱 polski</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="jp">🇯🇵 日本語</option>
            </select>
          </div>
          {[
            {
              dest: "/oxford-debate/setup",
              name: useLang("oxfordDebateConductionUtility"),
            },
            {
              dest: "/sound-demonstration",
              name: useLang("soundDemonstration"),
              disabled: true,
            },
            {
              dest: "/debate-motion-generator",
              name: useLang("debateMotionGenerator"),
              disabled: true,
            },
            // {
            //   dest: "/ladder-generator",
            //   name: useLang("tournamentLadderGenerator"),
            //   disabled: true,
            // },
          ].map((el) => {
            return (
              <div key={el.dest}>
                <Link
                  href={el.disabled ? "/" : el.dest}
                  className="rounded-lg"
                  tabIndex={el.disabled ? -1 : 0}
                >
                  <button
                    disabled={el.disabled}
                    tabIndex={-1}
                    className={`
                      ml-auto p-2 px-6 rounded-lg w-full border-2
                      border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                  >
                    {el.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:block max-w-7xl mx-auto mt-auto text-neutral-800 text-center p-2">
        <p className="text-balance">
          {useLang("disclaimer")}
          {" © 2023-2024 Jakub Mańczak."}
        </p>
      </div>
    </div>
  );
}
