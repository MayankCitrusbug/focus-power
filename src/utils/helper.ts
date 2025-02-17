import {
  KPIDataType,
  ObjectiveDataType,
  ObjectiveType,
  PrioritizedDataType,
} from '@/types';

export const objectiveYearsArr = (): ObjectiveType[] => {
  return [
    {
      text: '2022',
      selected: true,
    },
    {
      text: '2021',
      selected: false,
    },
    {
      text: '2020',
      selected: false,
    },
  ];
};

export const objectiveParametersArr = (): ObjectiveType[] => {
  return [
    {
      text: 'Company',
      selected: true,
    },
    {
      text: 'Division',
      selected: true,
    },
    {
      text: 'Individual',
      selected: true,
    },
  ];
};

export const objectiveDataArr = (): ObjectiveDataType[] => {
  return [
    {
      key: '1',
      objectiveType: 'company',
      division: 'CEO',
      responsible: ['matilda', 'matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: [
        'We have companyX as client',
        'We are larger than competitorY',
        'We have grown more than 30% in revenue',
      ],
    },
    {
      key: '2',
      objectiveType: 'division',
      division: 'Sales',
      responsible: ['matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
    {
      key: '3',
      objectiveType: 'division',
      division: 'Sales',
      responsible: ['matilda', 'matilda'],
      description:
        'By 2030 we want to be the leader in XXX with only newly launched product line',
      dueDate: '21.10.2029',
      progress: 25,
      achieved: 'Objective is achieved when',
      conditions: ['We have expanded into regionZ', 'Revenue has grown by 20%'],
    },
  ];
};

export const prioritizedDataArr = (): PrioritizedDataType[] => {
  return [
    {
      key: '1',
      completed: false,
      task: {
        name: 'Prepare Marketing Review March - 2022',
        link: '#',
      },
      dueDate: '01.01.2023',
      timeRemaining: {
        time: 28,
        unit: 'd',
      },
      priority: 1,
    },
    {
      key: '2',
      completed: false,
      task: {
        name: 'Meet desired customer deadline',
      },
      dueDate: '01.01.2023',
      timeRemaining: {
        time: -3,
        unit: 'd',
      },
      priority: 2,
    },
    {
      key: '3',
      completed: true,
      task: {
        name: 'Meet desired customer deadline',
      },
      dueDate: '01.01.2023',
      timeRemaining: {
        time: 2,
        unit: 'hrs',
      },
      priority: 1,
    },
    {
      key: '4',
      completed: true,
      task: {
        name: 'Meet desired customer deadline',
      },
      dueDate: '01.01.2023',
      timeRemaining: {
        time: 1,
        unit: 'd',
      },
      priority: 3,
    },
  ];
};

export const KPIsPlasticDataArr = (): KPIDataType[] => {
  return [
    {
      key: '1',
      kpi: 'Cost per Lead',
      updateStatus: 0,
      responsible: 'P. G.',
      graph: '/graph/cost-per-lead',
      unit: '€/#',
      monthlyTarget: 150,
      monthlyActual: 1583438,
      monthPercentage: 107.21,
      ytdTarget: 1476923.07,
      priority: 1,
      deviation: 1583288,
      children: [
        {
          key: '2',
          kpi: 'Add Spent',
          updateStatus: 0,
          responsible: 'P. G.',
          graph: '/graph/add-spent',
          unit: '€',
          monthlyTarget: 150000,
          monthlyActual: -19849,
          monthPercentage: -26.55,
          ytdTarget: 74750,
          priority: 2,
          deviation: -169849,
        },
        {
          key: '3',
          kpi: 'Leads',
          updateStatus: 0,
          responsible: 'P. G.',
          graph: '/graph/leads',
          unit: '#',
          monthlyTarget: 1000,
          monthlyActual: -19849,
          monthPercentage: -26.55,
          ytdTarget: 74750,
          priority: 2,
          deviation: -20849,
        },
        {
          key: '4',
          kpi: 'Another',
          updateStatus: 0,
          responsible: 'P. G.',
          graph: '/graph/leads',
          unit: '#',
          monthlyTarget: 1000,
          monthlyActual: -19849,
          monthPercentage: -26.55,
          ytdTarget: 74750,
          priority: 2,
          deviation: -20849,
        },
      ],
    },
    {
      key: '4',
      kpi: 'DB VI',
      updateStatus: 1,
      responsible: 'P. G.',
      graph: '/graph/db-vi',
      unit: '€',
      monthlyTarget: 74750,
      monthlyActual: -19849,
      monthPercentage: -26.55,
      ytdTarget: 74750,
      priority: 1,
      deviation: -94699,
    },
    {
      key: '5',
      kpi: 'Manufacturing Costs',
      updateStatus: 0,
      responsible: 'P. G.',
      graph: '/graph/manufacturing-costs',
      unit: '%',
      monthlyTarget: 3.22,
      monthlyActual: 13.08,
      monthPercentage: 9.85,
      ytdTarget: 3.22,
      priority: 3,
      deviation: 9.86,
    },
    {
      key: '6',
      kpi: 'DB VI Marge',
      updateStatus: 0,
      responsible: 'P. G.',
      graph: '/graph/db-vi-marge',
      unit: '%',
      monthlyTarget: 5,
      monthlyActual: -1.24,
      monthPercentage: 6.24,
      ytdTarget: 5,
      priority: 2,
      deviation: -6.24,
    },
  ];
};

export const KPIsWasteDisposalDataArr = (): KPIDataType[] => {
  return [
    {
      key: '1',
      kpi: 'Recycling Rate',
      updateStatus: 1,
      responsible: 'A. B.',
      graph: '/graph/recycling-rate',
      unit: '%',
      monthlyTarget: 50,
      monthlyActual: 48,
      monthPercentage: -4.0,
      ytdTarget: 50,
      priority: 1,
      deviation: -2,
    },
    {
      key: '2',
      kpi: 'Landfill Usage',
      updateStatus: 0,
      responsible: 'A. B.',
      graph: '/graph/landfill-usage',
      unit: 'tons',
      monthlyTarget: 5000,
      monthlyActual: 5200,
      monthPercentage: 4.0,
      ytdTarget: 5000,
      priority: 2,
      deviation: 200,
    },
    {
      key: '3',
      kpi: 'Composting Rate',
      updateStatus: 1,
      responsible: 'A. B.',
      graph: '/graph/composting-rate',
      unit: '%',
      monthlyTarget: 20,
      monthlyActual: 18,
      monthPercentage: -10.0,
      ytdTarget: 20,
      priority: 3,
      deviation: -2,
    },
    {
      key: '4',
      kpi: 'Hazardous Waste Processed',
      updateStatus: 1,
      responsible: 'C. D.',
      graph: '/graph/hazardous-waste',
      unit: 'tons',
      monthlyTarget: 200,
      monthlyActual: 180,
      monthPercentage: -10.0,
      ytdTarget: 200,
      priority: 2,
      deviation: -20,
    },
    {
      key: '5',
      kpi: 'Plastic Waste Reduction',
      updateStatus: 0,
      responsible: 'C. D.',
      graph: '/graph/plastic-waste-reduction',
      unit: '%',
      monthlyTarget: 10,
      monthlyActual: 12,
      monthPercentage: 20.0,
      ytdTarget: 10,
      priority: 1,
      deviation: 2,
    },
    {
      key: '6',
      kpi: 'E-Waste Collected',
      updateStatus: 1,
      responsible: 'E. F.',
      graph: '/graph/e-waste-collected',
      unit: 'tons',
      monthlyTarget: 300,
      monthlyActual: 280,
      monthPercentage: -6.67,
      ytdTarget: 300,
      priority: 3,
      deviation: -20,
    },
    {
      key: '7',
      kpi: 'Water Waste Reduction',
      updateStatus: 0,
      responsible: 'E. F.',
      graph: '/graph/water-waste-reduction',
      unit: '%',
      monthlyTarget: 15,
      monthlyActual: 14,
      monthPercentage: -6.67,
      ytdTarget: 15,
      priority: 2,
      deviation: -1,
    },
  ];
};
