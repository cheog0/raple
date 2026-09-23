"use client";

import { motion } from "framer-motion";
import { Bell, Clock3, ListChecks, Mic } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

const features = [
  {
    icon: Mic,
    title: "녹음에만 집중",
    copy: "새 회의 시작 한 번이면 됩니다. 참석자와 현장 메모를 함께 남길 수 있어요.",
  },
  {
    icon: ListChecks,
    title: "요약과 후속 조치",
    copy: "대화가 끝나면 AI가 핵심과 할 일을 정리합니다. 준비되면 알려 드려요.",
  },
  {
    icon: Clock3,
    title: "타임라인으로 이어가기",
    copy: "회의록을 일정에 묶어 팀이 같은 맥락을 보게 합니다.",
  },
  {
    icon: Bell,
    title: "놓치지 않는 알림",
    copy: "분석이 끝나면 토스트와 알림함으로 바로 확인할 수 있습니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F7FAFF] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="max-w-[560px]">
          <p className="font-display text-[11px] font-extrabold tracking-[0.22em] text-[#2F7DE0]">
            WHAT RAPLE DOES
          </p>
          <h2 className="mt-4 text-[36px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[#1C1F24] sm:text-[48px]">
            회의 이후까지
            <br />
            <span className="text-[#2F7DE0]">한 흐름으로.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.08} y={28}>
                <motion.article
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative overflow-hidden rounded-[22px] border border-[#E4EAF3] bg-white p-6 [transform-style:preserve-3d]"
                >
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#4C9AFF]/8 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="grid size-11 place-items-center rounded-2xl bg-[#F1F6FF] text-[#2F7DE0]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-[20px] font-bold tracking-[-0.03em] text-[#1C1F24]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#748298]">
                    {feature.copy}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
