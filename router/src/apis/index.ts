import { Memo } from '../models';

let store: Memo[] = [
  { id: 2, content: 'first memo...', createdAt: Date.now() },
  { id: 1, content: 'second memo...', createdAt: Date.now() - 1 },
]

export const fetchMemoList = () => {
  return store.filter(memo => !memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!);
}

export const addMemo = (memo: Memo) => {
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  return memo;
}