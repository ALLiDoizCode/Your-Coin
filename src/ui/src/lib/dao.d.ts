export interface Proposal {
    id: number;
    vote?: boolean | null;
    creator: string;
    title: string;
    yay: bigint;
    description: string;
    timeStamp: number;
    treasuryRequestId?: number | null;
    executed: boolean;
    nay: bigint;
    request?: Request | null;
  }
  export interface TreasuryRequest {
    id: number;
    recipient: string;
    amount: number;
    description: string;
    createdAt: number;
    executed: boolean;
    approvals:[Approval];
  }

  interface Approval {
    power: number;
    member: string;
  }

  export interface Request {
    recipient: string;
    amount: number;
    description: string;
  }
  
  export interface Vote {
    yay: boolean;
    timeStamp: bigint;
    power: number;
    proposalId: number;
    member: string;
  }
  