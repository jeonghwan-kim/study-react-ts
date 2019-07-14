import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

interface Props {
  memo?: Memo;
  onDeleteMemo(id: number): void
}

const MemoPage: React.FC<Props> = props => {
  const { memo, onDeleteMemo } = props;
  if (!memo) return null;

  return (
    <React.Fragment>
      <Button onClick={() => onDeleteMemo(memo.id!)}>삭제</Button>
      <div style={{
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
      }}>
        <div style={{
          marginBottom: '15px',
        }}>{memo.createdAt && <DateString timestamp={memo.createdAt} />}</div>
        <div style={{

        }}>{memo.content}</div>
      </div>
    </React.Fragment>
  );
}


export default MemoPage;
