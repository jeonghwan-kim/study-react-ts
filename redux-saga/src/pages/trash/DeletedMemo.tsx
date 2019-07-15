import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

interface Props {
  memo?: Memo
  onRestore(id: number): void
}

const DeletedMemo: React.FC<Props> = props => {
  const { memo, onRestore } = props;
  if (!memo) return null
  
  return (
    <React.Fragment>
      <Button onClick={() => onRestore(memo.id!)}>복구</Button>
      <div style={{
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
      }}>
        <div style={{ 
            marginBottom: '15px'
          }}
        >
          {memo.createdAt && <DateString timestamp={memo.createdAt} />}
        </div>
        <div>{memo.content}</div>
      </div>
    </React.Fragment>

  );
}

export default DeletedMemo;
