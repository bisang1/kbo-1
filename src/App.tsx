import React from 'react';
import Header from './components/Header';
import AdBanner from './components/AdBanner';
import TicketSection from './components/TicketSection';
import ScheduleSection from './components/ScheduleSection';
import TransportSection from './components/TransportSection';
import TeamsSection from './components/TeamsSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      
      <AdBanner size="large" position="헤더 하단" />
      
      <main>
        <TicketSection />
        <ScheduleSection />
        
        <AdBanner size="medium" position="중간 섹션" />
        
        <TransportSection />
        <TeamsSection />
      </main>
      
      <footer className="py-12 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <AdBanner size="responsive" position="푸터 영역" />
          
          <div className="text-center text-white/60 mt-8">
            <p className="text-sm">
              © 2024 대한민국 야구 직관 정보. 모든 권리 보유.
            </p>
            <p className="text-xs mt-2">
              실시간 정보는 각 구단 공식 사이트를 확인해주세요.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;