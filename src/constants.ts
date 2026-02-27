import { Opportunity } from './types';

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    deadline: '2026-03-15',
    branchEligibility: ['CS', 'IT'],
    yearEligibility: ['3rd', '4th'],
    interestCount: 156,
    isTrending: true,
    isNew: false,
    status: 'Open'
  },
  {
    id: '2',
    title: 'Product Design Intern',
    company: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    deadline: '2026-03-01',
    branchEligibility: ['All'],
    yearEligibility: ['2nd', '3rd', '4th'],
    interestCount: 89,
    isTrending: true,
    isNew: true,
    status: 'Closing Soon'
  },
  {
    id: '3',
    title: 'Data Science Intern',
    company: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    deadline: '2026-04-10',
    branchEligibility: ['CS', 'IT', 'ECE'],
    yearEligibility: ['4th'],
    interestCount: 245,
    isTrending: true,
    isNew: false,
    status: 'Open'
  },
  {
    id: '4',
    title: 'Marketing Associate',
    company: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg',
    deadline: '2026-02-28',
    branchEligibility: ['All'],
    yearEligibility: ['All'],
    interestCount: 42,
    isTrending: false,
    isNew: false,
    status: 'Closing Soon'
  },
  {
    id: '5',
    title: 'Hardware Engineer',
    company: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    deadline: '2026-05-20',
    branchEligibility: ['ECE', 'EE'],
    yearEligibility: ['4th'],
    interestCount: 112,
    isTrending: false,
    isNew: true,
    status: 'Open'
  },
  {
    id: '6',
    title: 'Business Analyst',
    company: 'Goldman Sachs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg',
    deadline: '2026-02-20',
    branchEligibility: ['All'],
    yearEligibility: ['3rd', '4th'],
    interestCount: 300,
    isTrending: false,
    isNew: false,
    status: 'Closed'
  }
];
