'use client';

import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");

  const renderHome = () => {
    return (
      <div className="flex flex-col pb-32 max-w-[430px] mx-auto bg-black text-white" dir="rtl">

        {/* Header */}
        <div className="relative h-[240px] w-full bg-[#111]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 p-5 flex flex-col justify-between">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <span className="text-white font-bold text-lg">City Deals</span>
            </div>

            <div className="text-right">
              <h1 className="text-2xl font-bold">عروض القاهرة</h1>
              <p className="text-white/70 text-sm">16 عرض متوفر</p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="px-4 -mt-5 grid grid-cols-3 gap-3">
          <div className="bg-[#121212] rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-gray-500">-</p>
            <p className="text-xs text-gray-400">محلات</p>
          </div>

          <div className="bg-[#121212] rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-orange-400">6</p>
            <p className="text-xs text-gray-400">فلاش ديل</p>
          </div>

          <div className="bg-[#121212] rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-red-500">16</p>
            <p className="text-xs text-gray-400">عروض</p>
          </div>
        </div>

        {/* Category */}
        <div className="px-4 mt-5">
          <button className="w-full flex items-center justify-between bg-white/5 rounded-2xl px-4 py-3.5">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                📂
              </div>

              <div>
                <p className="text-xs text-white/50">اختر الفئة</p>
                <p className="text-sm font-semibold">الكل</p>
              </div>
            </div>

            <span className="text-white/50">▼</span>
          </button>
        </div>

        {/* Flash Deal */}
        <div className="px-4 mt-6">
          <h2 className="text-red-500 font-bold mb-3">⚡ فلاش ديل</h2>

          <div className="bg-[#111] rounded-2xl overflow-hidden">

            <div className="h-48 bg-gradient-to-br from-[#1e1e1e] to-[#121212] relative">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                FLASH DEAL
              </div>

              <div className="absolute bottom-3 left-3 text-xs bg-black/60 px-2 py-1 rounded">
                50% OFF
              </div>
            </div>

            <div className="p-4 text-right">
              <p className="text-xs text-yellow-500">مطعم مأكولات</p>
              <h3 className="font-bold">Koshary Flash Deal</h3>

              <div className="flex justify-between mt-3">
                <div>
                  <span className="text-green-400 font-bold">150 ج.م</span>
                  <span className="text-gray-500 line-through text-xs ml-2">300</span>
                </div>

                <span className="text-xs text-gray-400">📍 الدقي</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="fixed bottom-4 left-4 right-4 bg-[#111]/90 backdrop-blur-lg rounded-2xl py-3 flex justify-around max-w-[430px] mx-auto">

          <button onClick={() => setCurrentTab("home")} className={currentTab === "home" ? "text-red-500" : "text-gray-500"}>
            🏠
          </button>

          <button onClick={() => setCurrentTab("explore")} className={currentTab === "explore" ? "text-red-500" : "text-gray-500"}>
            🧭
          </button>

          <button className="text-white bg-red-600 w-12 h-12 rounded-full">
            🔍
          </button>

          <button onClick={() => setCurrentTab("saved")} className={currentTab === "saved" ? "text-red-500" : "text-gray-500"}>
            ❤
          </button>

          <button onClick={() => setCurrentTab("profile")} className={currentTab === "profile" ? "text-red-500" : "text-gray-500"}>
            👤
          </button>

        </nav>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderHome()}
    </div>
  );
}
