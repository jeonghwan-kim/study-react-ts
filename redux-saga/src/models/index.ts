export interface Memo {
  id?: number;
  content: string;
  createdAt?: number;
  deleted?: boolean;
}

export interface Toast {
  id: number;
  text: string;
}

export interface Dialog {
  type: 'alter' | 'confirm'
  text: string
}