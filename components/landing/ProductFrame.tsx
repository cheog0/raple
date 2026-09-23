"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bell, Calendar, LayoutDashboard, Plus, Search, Star } from "lucide-react";
import Logo from "@/components/landing/Logo";

const meetings = [
  { title: "고객사 킥오프", meta: "오늘 · 42분", tag: "미팅" },
  { title: "주간 스프린트 리뷰", meta: "어제 · 28분", tag: "스크럼" },
  { title: "디자인 싱크", meta: "9월 22일 · 35분", tag: "미팅" },
];

export default function ProductFrame() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-180, 180], [7, -7]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-180, 180], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  });

  return (
    <motion.div
      className="relative w-full max-w-[640px] [perspective:1200px]"
      onMouseMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - box.left - box.width / 2);
        y.set(event.clientY - box.top - box.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
    >
      <div className="overflow-hidden rounded-[22px] border border-[#E3EAF3] bg-white shadow-[0_30px_80px_rgba(47,125,224,0.16)]">
        <div className="grid min-h-[380px] grid-cols-1 sm:min-h-[460px] sm:grid-cols-[168px_1fr]">
          <aside className="hidden border-r border-[#EEF2F6] bg-white p-3.5 sm:block">
            <div className="flex h-7 items-center px-1">
              <Logo className="h-5" />
            </div>
            <button
              type="button"
              className="mt-4 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#2F7DE0] text-[11px] font-semibold text-white shadow-sm"
            >
              <Plus className="size-3.5" />새 회의 시작
            </button>
            <p className="mt-5 px-1 text-[9px] font-bold tracking-[0.14em] text-[#9AA3B2]">
              WORKSPACE
            </p>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-[#E8F3FF] px-2 py-2 text-[11px] font-semibold text-[#2F7DE0]">
              <LayoutDashboard className="size-3.5" />
              대시보드
            </div>
            <div className="mt-4 rounded-xl border border-[#E8EAEE] px-2.5 py-2">
              <div className="flex items-center justify-between text-[10px] font-bold text-[#1C1F24]">
                <span>기본 엔진</span>
                <span>48초 / 5분</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#F0F2F5]">
                <div className="h-full w-[22%] rounded-full bg-[#4C9AFF]" />
              </div>
            </div>
          </aside>
          <section className="min-w-0 bg-white">
            <div className="flex h-12 items-center justify-between border-b border-[#EEF2F6] px-4 text-[11px] text-[#8B95A5]">
              <span>
                워크스페이스 <span className="mx-1">›</span>
                <b className="text-[#1C1F24]">대시보드</b>
              </span>
              <span className="relative">
                <Bell className="size-4" />
                <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-rose-500" />
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[12px] font-semibold text-[#2F7DE0]">
                    오늘의 회의를
                  </p>
                  <p className="mt-1 text-[12px] text-[#6B7686]">
                    더 선명하게 기록해보세요.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-8 items-center gap-1 rounded-lg bg-[#2F7DE0] px-3 text-[11px] font-semibold text-white"
                >
                  <Plus className="size-3" />새 회의 시작
                </button>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["전체 회의", "24건"],
                  ["이번 달", "8건"],
                  ["최근 활동", "오늘"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#E8EAEE] px-2.5 py-2.5"
                  >
                    <p className="text-[10px] text-[#8B95A5]">{label}</p>
                    <p className="mt-1 text-[18px] font-extrabold tracking-tight text-[#1C1F24]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[13px] font-bold text-[#1C1F24]">기록된 회의</p>
                <span className="inline-flex items-center gap-1 rounded-lg bg-[#F3F7FF] px-2 py-1 text-[10px] font-semibold text-[#2F7DE0]">
                  <Calendar className="size-3" />
                  리스트
                </span>
              </div>
              <div className="mt-2 flex h-8 items-center gap-2 rounded-lg border border-[#E8EAEE] px-2.5 text-[11px] text-[#8B95A5]">
                <Search className="size-3.5" />
                회의 제목으로 검색
              </div>
              <div className="mt-2 space-y-1.5">
                {meetings.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                    className="flex items-center justify-between rounded-xl border border-[#EEF2F6] px-3 py-2"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold text-[#1C1F24]">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-[#8B95A5]">{item.meta}</p>
                    </div>
                    <Star className="size-3.5 text-amber-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
