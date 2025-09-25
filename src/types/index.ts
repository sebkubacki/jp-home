// Timeline Types
export interface TimelineStage {
    title: string;
    description: string;
    details: string[];
    period: string;
    status: 'completed' | 'in-progress' | 'planned';
  }
  
  // Floor Plan Types
  export interface FloorPlanRoom {
    name: string;
    area: number;
  }
  
  export interface FloorPlan {
    title: string;
    rooms: FloorPlanRoom[];
    totalArea?: number;
  }
  
  // Carousel Types
  export interface CarouselSlide {
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
  }
  
  // Investment Types
  export interface Investment {
    id: number;
    title: string;
    category: 'w-sprzedazy' | 'zrealizowane' | 'planowane';
    imageUrl?: string;
    description?: string;
  }