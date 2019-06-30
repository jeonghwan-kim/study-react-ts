interface Memo {
  id?: number;
  content: string;
  created: number;
  deleted?: boolean;
}

let store: Memo[] = [
  { id: 2, content: 'first memo...', created: Date.now() },
  { id: 1, content: 'second memo...', created: Date.now() - 1 },
]

export const fetchMemoList = () => {
  return store.filter(memo => !memo.deleted)
    .sort((a, b) => b.created - a.created);
}

export const addMemo = (memo: Memo) => {
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  store = [ memo, ...store ];
  return memo;
}