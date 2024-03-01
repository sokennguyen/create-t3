"use client";
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Slot } from "./_components/slot";

export default function Home() {
  useEffect(() => {
    const svgPaths = document.querySelectorAll(".path");
    console.log(svgPaths);
    const texts = document.querySelectorAll(".slot");

    function animation() {
      anime({
        targets: svgPaths,
        loop: true,
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 700,
        delay: (el, i) => {
          return i * 500;
        },
      });
    }

    function animateText() {
      anime({
        targets: texts,
        translateX: 1,
        scale: 1.2,
        rotate: "1turn",
      });
    }

    animateText();
    animation();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Slot />
      </div>
    </main>
  );
}
