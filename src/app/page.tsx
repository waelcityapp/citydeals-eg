'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderHome = () => {
    return (
      <div className="flex flex-col pb-32 max-w-[430px] mx-auto bg-black text-white" dir="rtl" style={{ fontFamily: 'sans-serif' }}>
        
        {/* 1. هيدر ريبليت الفخم بصورة الخلفية ليلية */}
        <div className="relative h-[240px] w-full bg-cover bg-center" style={{ backgroundImage: `url('https://unsplash.com')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <span className="text-white font-bold text-lg drop-shadow">City Deals</span>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-white mb-0.5">عروض القاهرة</h1>
              <p className="text-white/70 text-sm">16 عرض متوفر</p>
            </div>
          </div>
        </div>

        {/* 2. مربعات العدادات الإحصائية الثلاثية */}
        <div className="px-4 -mt-5 grid grid-cols-3 gap-3 z-10">
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-3 text-center shadow-xl">
            <p className="text-xl font-bold text-gray-500">-</p>
            <p className="text-xs text-gray-400 mt-0.5">محلات</p>
          </div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-3 text-center shadow-xl">
            <p className="text-xl font-bold text-orange-400">6</p>
            <p className="text-xs text-gray-400 mt-0.5">فلاش ديل</p>
          </div>
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-3 text-center shadow-xl">
            <p className="text-xl font-bold text-red-500">16</p>
            <p className="text-xs text-gray-400 mt-0.5">عروض</p>
          </div>
        </div>

        {/* 3. قائمة اختيار الفئة المنسدلة الذكية */}
        <div className="px-4 mt-5">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-right transition-all active:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl bg-white/5">
                <span>📂</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50">اختر الفئة</p>
                <p className="font-semibold text-sm truncate text-white mt-0.5">الكل</p>
              </div>
            </div>
            <span className="text-white/50 text-xs">▼</span>
          </button>
        </div>

        {/* 4. قسم الـ Flash Deals المطور */}
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-red-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              فلاش ديل
            </h2>
            <span className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">شاهد الكل ←</span>
          </div>

          {/* قائمة بطاقات العروض الفاخرة */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                FLASH DEAL
              </div>
              <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-red-500 transition-colors">
                ❤
              </button>
              <div className="relative h-48 w-full bg-gradient-to-br from-[#1e1e1e] to-[#121212] overflow-hidden">
                <img src="https://picsum.photos" alt="Koshary" className="w-full h-full object-cover opacity-60" />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-lg">
                  50% OFF
                </div>
              </div>
              <div className="p-4 text-right">
                <span className="text-xs text-yellow-500 font-bold">مطعم مأكولات</span>
                <h3 className="text-base font-bold mt-1 text-gray-200">Koshary Flash Deal</h3>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-green-400">150 ج.م</span>
                    <span className="text-xs text-gray-500 line-through">300 ج.م</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-[#1e1e1e] px-2 py-1 rounded-md">📍 الدقي</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. شريط التنقل السفلي الفاخر وزر البحث الدائري */}
        <nav className="fixed bottom-4 left-4 right-4 bg-[#111]/90 backdrop-blur-lg border border-white/5 py-3 rounded-[24px] flex justify-around items-center shadow-2xl z-50 max-w-[398px] mx-auto">
          <button onClick={() => setCurrentTab("home")} className={`flex flex-col items-center gap-0.5 transition ${currentTab === "home" ? "text-red-500" : "text-gray-500"}`}>
            <span className="text-lg">🏠</span>
            <span className="text-[9px] font-bold">Home</span>
          </button>
          <button onClick={() => setCurrentTab("explore")} className={`flex flex-col items-center gap-0.5 transition ${currentTab === "explore" ? "text-red-500" : "text-gray-500"}`}>
            <span className="text-lg">🧭</span>
            <span className="text-[9px] font-bold">Explore</span>
          </button>
          <div className="-mt-8 relative">
            <button className="h-14 w-14 bg-red-600 rounded-full flex items-center justify-center text-white border-4 border-black shadow-lg font-bold">
              🔍
            </button>
          </div>
          <button onClick={() => setCurrentTab("saved")} className={`flex flex-col items-center gap-0.5 transition ${currentTab === "saved" ? "text-red-500" : "text-gray-500"}`}>
            <span className="text-lg">❤</span>
            <span className="text-[9px] font-bold">Saved</span>
          </button>
          <button onClick={() => setCurrentTab("profile")} className={`flex flex-col items-center gap-0.5 transition ${currentTab === "profile" ? "text-red-500" : "text-gray-500"}`}>
            <span className="text-lg">👤</span>
            <span className="text-[9px] font-bold">Profile</span>
          </button>
        </nav>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {mounted && renderHome()}
    </div>
  );
}
