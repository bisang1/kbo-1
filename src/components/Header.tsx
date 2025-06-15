import React from 'react';
import { Baseline as Baseball, Calendar, MapPin, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
            <Baseball className="w-12 h-12 text-yellow-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          ⚾ 대한민국 야구 직관
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
          정보 총정리
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-blue-200">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Calendar className="w-5 h-5" />
            <span>실시간 경기 일정</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <MapPin className="w-5 h-5" />
            <span>교통 정보</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Users className="w-5 h-5" />
            <span>팀 정보</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;