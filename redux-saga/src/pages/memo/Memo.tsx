import * as React from 'react';
import { Memo } from '../../models';
import Skelton from '../../components/Skelton';
import Button from '../../components/Button';
import DateString from '../../components/DateString';
import { DeleteMemoAction } from '../../reducers/memo';

interface Props {
  memo?: Memo;
  apiCalling: boolean;
  deleteMemo(id: number): DeleteMemoAction
}

const MemoPage: React.FC<Props> = props => {
  const { apiCalling, memo, deleteMemo } = props;

  return (
    <React.Fragment>
      {memo 
        ? <React.Fragment>
            <Button 
              disabled={apiCalling}
              onClick={() => deleteMemo(memo.id!)}
            >삭제</Button>
            <MemoPageLayout>
              {memo.createdAt && <DateString timestamp={memo.createdAt} />}
              <div>
                {memo.content}
              </div>
            </MemoPageLayout>
          </React.Fragment>
        : apiCalling && <MemoPageLayout><Skelton /></MemoPageLayout>
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

