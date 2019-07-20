import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

interface Props {
  memo?: Memo;
  apiCalling: boolean;
  onDeleteMemo(id: number): void
}

const MemoPage: React.FC<Props> = props => {
  const { apiCalling, memo, onDeleteMemo } = props;

  return (
    <React.Fragment>
      {!memo && apiCalling && <MemoPageLayout> 로딩중...</MemoPageLayout>}
      {memo && 
        <React.Fragment>
          <Button onClick={() => onDeleteMemo(memo.id!)}>삭제</Button>
          <MemoPageLayout>
            {memo.createdAt && <DateString timestamp={memo.createdAt} />}
            <div>
              {memo.content}
            </div>
          </MemoPageLayout>
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default MemoPage;

const MemoPageLayout: React.FC = ({children}) => {
  return (
    <div style={{
      borderTop: '1px solid #ddd',
      paddingTop: '10px',
    }}>
      <div style={{
        marginBottom: '15px',
      }}>
        {children}
      </div>
    </div>
  )
}
