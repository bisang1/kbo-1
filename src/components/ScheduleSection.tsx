import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const schedules = [
  { stadium: '잠실야구장', url: 'https://example.com/schedule/jamsil' },
  { stadium: '고척 스카이돔', url: 'https://example.com/schedule/gocheok' },
  { stadium: '수원 KT 위즈파크', url: 'https://example.com/schedule/suwon' },
  { stadium: '사직야구장', url: 'https://example.com/schedule/sajik' },
  { stadium: '대구삼성라이온즈파크', url: 'https://example.com/schedule/daegu' },
  { stadium: '창원NC파크', url: 'https://example.com/schedule/changwon' },
  { stadium: '인천 SSG랜더스필드', url: 'https://example.com/schedule/incheon' },
  { stadium: '광주 챔피언스필드', url: 'https://example.com/schedule/gwangju' },
  { stadium: '대전이글스파크', url: 'https://example.com/schedule/daejeon' },
];

const ScheduleSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">📅 실시간 경기 일정</h2>
          <p className="text-xl text-blue-200">경기장별 일정을 실시간으로 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-white text-lg">
                  {schedule.stadium}
                </h3>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg flex items-center justify-center border border-white/10">
                  <div className="text-center text-white/70">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">경기 일정 로딩 중...</p>
                    <p className="text-xs mt-1 opacity-75">실제 구현시 API 연동</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;