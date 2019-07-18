import { Memo } from '../models';

const DELAY_MS = 500;

let store: Memo[] = [
  { id: 2, content: '두번째 메모입니다.', createdAt: Date.now() },
  { id: 1, content: '첫번재 메모입니다.', createdAt: Date.now() - 1 },
]

export const fetchMemoList = () => new Promise(resolve => {
  const memoList = store.filter(memo => !memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!);

  setTimeout(() => resolve(memoList), DELAY_MS);
})


export const fetchDeletedMemoList = () =>  new Promise(resolve => {
  const memoList = store.filter(memo => !!memo.deleted)
  .sort((a, b) => b.createdAt! - a.createdAt!);
  
  setTimeout(() => resolve(memoList), DELAY_MS);
})

export const fetchMemo = (memoId: number) => new Promise(resolve => {
  const memo = store.find(m => m.id === memoId)
  setTimeout(() => resolve(memo), DELAY_MS)
});

export const addMemo = (memo: Memo) => new Promise(resolve => {
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  
  setTimeout(()=> resolve(memo), DELAY_MS)
})

export const deleteMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? true: memo.deleted,
  }));
}

export const resotreMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }));
}