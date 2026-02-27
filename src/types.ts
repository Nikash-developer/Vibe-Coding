export type Branch = 'CS' | 'IT' | 'ECE' | 'ME' | 'CE' | 'EE' | 'All';
export type Year = '1st' | '2nd' | '3rd' | '4th' | 'All';
export type Status = 'Open' | 'Closing Soon' | 'Closed';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  logo: string;
  deadline: string; // ISO date string
  branchEligibility: Branch[];
  yearEligibility: Year[];
  interestCount: number;
  isTrending?: boolean;
  isNew?: boolean;
  isRecommended?: boolean;
  status: Status;
}

export interface UserPreferences {
  branch: Branch;
  year: Year;
}
