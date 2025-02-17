export type ObjectiveType = {
  text: string;
  selected: boolean;
};

export interface ObjectiveDataType {
  key: string;
  objectiveType: string;
  responsible: string[];
  division: string;
  description: string;
  dueDate: string;
  progress: number;
  achieved: string;
  conditions: string[];
}

export interface PrioritizedDataType {
  key: string;
  completed: boolean;
  task: {
    name: string;
    link?: string;
  };
  dueDate: string;
  timeRemaining: {
    time: number;
    unit: 'd' | 'hrs' | 'min';
  };
  priority: number;
}

export interface KPIDataType {
  key: string;
  kpi: string;
  updateStatus: 1 | 0;
  responsible: string;
  graph: string;
  unit: string;
  monthlyTarget: number;
  monthlyActual: number;
  monthPercentage: number;
  ytdTarget: number;
  priority: number;
  deviation: number;
  children?: KPIDataType[];
}
