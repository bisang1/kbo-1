import React from 'react';
import { Users, Crown, Trophy } from 'lucide-react';

const teams = [
  { name: 'LG 트윈스', manager: '염경엽', color: 'from-red-500 to-red-700', status: 'champion' },
  { name: 'SSG 랜더스', manager: '이재원 (대행)', color: 'from-red-600 to-red-800', status: 'strong' },
  { name: 'KT 위즈', manager: '이강철', color: 'from-gray-700 to-black', status: 'rising' },
  { name: 'NC 다이노스', manager: '강인권', color: 'from-yellow-500 to-orange-500', status: 'stable' },
  { name: '두산 베어스', manager: '이승엽', color: 'from-blue-800 to-blue-900', status: 'veteran' },
  { name: '키움 히어로즈', manager: '홍원기', color: 'from-purple-500 to-indigo-500', status: 'competitive' },
  { name: '삼성 라이온즈', manager: '박진만', color: 'from-blue-600 to-blue-800', status: 'traditional' },
  { name: '롯데 자이언츠', manager: '김태형', color: 'from-blue-500 to-cyan-500', status: 'rebuilding' },
  { name: 'KIA 타이거즈', manager: '김종국', color: 'from-red-500 to-red-700', status: 'strong' },
  { name: '한화 이글스', manager: '카를로스 수베로', color: 'from-orange-500 to-red-500', status: 'developing' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'champion': return <Crown className="w-5 h-5 text-yellow-400" />;
    case 'strong': return <Trophy className="w-5 h-5 text-orange-400" />;
    default: return <Users className="w-5 h-5 text-blue-400" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'champion': return '우승팀';
    case 'strong': return '강팀';
    case 'rising': return '상승세';
    case 'stable': return '안정적';
    case 'veteran': return '베테랑';
    case 'competitive': return '경쟁력';
    case 'traditional': return '전통강호';
    case 'rebuilding': return '재건 중';
    case 'developing': return '발전 중';
    default: return '';
  }
};

const TeamsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">🧢 KBO 팀별 감독/정보</h2>
          <p className="text-xl text-blue-200">2024 시즌 각 팀의 지휘봉을 잡은 감독들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-10 rounded-xl transition-opacity group-hover:opacity-20`}></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-3">
                  {getStatusIcon(team.status)}
                </div>
                
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  {team.name}
                </h3>
                
                <p className="text-blue-200 text-sm mb-3">
                  감독: <span className="font-medium text-white">{team.manager}</span>
                </p>
                
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20">
                  <span className="text-white/80">{getStatusText(team.status)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 inline-block">
            <div className="flex items-center gap-3 text-blue-200">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <p className="text-lg">
                <span className="font-bold text-white">2024 시즌</span> 치열한 경쟁이 계속됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;