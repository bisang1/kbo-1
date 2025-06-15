import React from 'react';
import { Car, Train, MapPin, AlertCircle } from 'lucide-react';

const transportInfo = [
  {
    stadium: '잠실야구장',
    subway: '2호선 종합운동장역',
    parking: '주차 가능 (혼잡)',
    status: 'busy',
    icon: Train
  },
  {
    stadium: '고척돔',
    subway: '1호선 구일역',
    parking: '주차 가능',
    status: 'available',
    icon: Train
  },
  {
    stadium: '수원 위즈파크',
    subway: '1호선 세류역/버스 이용',
    parking: '주차 가능',
    status: 'available',
    icon: Train
  },
  {
    stadium: '사직야구장',
    subway: '부산 3호선 사직역',
    parking: '주차 제한적',
    status: 'limited',
    icon: Train
  },
  {
    stadium: '대구라이온즈파크',
    subway: '지하철 2호선 대공원역',
    parking: '주차 혼잡',
    status: 'busy',
    icon: Train
  },
  {
    stadium: '창원NC파크',
    subway: '창원중앙역 버스 이동',
    parking: '주차장 넉넉함',
    status: 'good',
    icon: Car
  },
  {
    stadium: '인천SSG필드',
    subway: '1호선 동암역/버스 연계',
    parking: '주차 어려움',
    status: 'difficult',
    icon: Train
  },
  {
    stadium: '광주챔피언스필드',
    subway: '금남로5가역',
    parking: '주차 가능',
    status: 'available',
    icon: Train
  },
  {
    stadium: '대전이글스파크',
    subway: '서대전역 버스 20분',
    parking: '주차 가능',
    status: 'available',
    icon: Car
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'available': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'busy': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'limited': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    case 'difficult': return 'text-red-400 bg-red-400/10 border-red-400/20';
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

const TransportSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">🚗 직관 가는 교통/주차 안내</h2>
          <p className="text-xl text-blue-200">각 경기장까지 가는 가장 편리한 방법을 안내합니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <info.icon className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-white text-lg">
                  {info.stadium}
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300 font-medium">지하철/버스</p>
                    <p className="text-white">{info.subway}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300 font-medium">주차 정보</p>
                    <div className="flex items-center gap-2">
                      <p className="text-white">{info.parking}</p>
                      <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(info.status)}`}>
                        {info.status === 'busy' && '혼잡'}
                        {info.status === 'available' && '여유'}
                        {info.status === 'good' && '넉넉'}
                        {info.status === 'limited' && '제한'}
                        {info.status === 'difficult' && '어려움'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
          <div className="flex items-center gap-3 text-yellow-400">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-medium">
              경기일에는 교통상황이 매우 혼잡할 수 있으니 대중교통 이용을 권장합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;