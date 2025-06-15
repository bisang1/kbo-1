import React from 'react';
import { Ticket, ExternalLink } from 'lucide-react';

const stadiums = [
  { name: '잠실야구장', teams: 'LG, 두산', link: '#', color: 'from-red-500 to-pink-500' },
  { name: '고척 스카이돔', teams: '키움', link: '#', color: 'from-purple-500 to-indigo-500' },
  { name: '수원 KT 위즈파크', teams: 'KT', link: '#', color: 'from-gray-700 to-black' },
  { name: '사직야구장', teams: '롯데', link: '#', color: 'from-blue-500 to-cyan-500' },
  { name: '대구삼성라이온즈파크', teams: '삼성', link: '#', color: 'from-blue-600 to-blue-800' },
  { name: '창원NC파크', teams: 'NC', link: '#', color: 'from-yellow-500 to-orange-500' },
  { name: '인천SSG랜더스필드', teams: 'SSG', link: '#', color: 'from-red-600 to-red-800' },
  { name: '광주기아챔피언스필드', teams: 'KIA', link: '#', color: 'from-red-500 to-red-700' },
  { name: '대전이글스파크', teams: '한화', link: '#', color: 'from-orange-500 to-red-500' },
  { name: '울산문수야구장', teams: '간이구장', link: '#', color: 'from-green-500 to-teal-500' },
];

const TicketSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Ticket className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">🎫 경기장별 예매 링크</h2>
          <p className="text-xl text-blue-200">각 구장별 티켓 예매를 빠르게 진행하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stadiums.map((stadium, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stadium.color} opacity-10 rounded-xl transition-opacity group-hover:opacity-20`}></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  {stadium.name}
                </h3>
                <p className="text-blue-200 text-sm mb-4">
                  ({stadium.teams})
                </p>
                
                <a
                  href={stadium.link}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 group"
                >
                  <span className="text-sm font-medium">예매 바로가기</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;