// src/components/AnnouncementBanner.tsx

import { Megaphone } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    // ZMIANA: Dodany margines (my-8) i zwiększony padding (py-8)
    <div className="my-8 bg-amber-100 border-y-2 border-amber-200">
      <div className="max-w-7xl mx-auto py-8 px-4 flex items-center justify-center gap-4">
        <div className="flex-shrink-0">
          <Megaphone className="w-8 h-8 text-amber-700" />
        </div>
        <p className="text-lg md:text-2xl font-bold text-amber-900 text-center leading-tight">
          Możliwość wynajęcia sali z własnym cateringiem!
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;