import * as React from 'react';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { Memo } from '../../models';
import { fetchMemo, deleteMemo } from '../../apis';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

interface MemoMatchProps {
  id: string;
}

interface MemoState {
  memo?: Memo;
  deleted: boolean
}

class MemoComponent extends React.Component<
  RouteComponentProps<MemoMatchProps>,
  MemoState
> {
  constructor(props: RouteComponentProps<MemoMatchProps>) {
    super(props);

    this.state = {
      memo: undefined,
      deleted: false,
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchData(params.id);
  }

  componentWillReceiveProps(nextProps: RouteComponentProps<MemoMatchProps>) {
    const { match: { params }} = this.props;
    const id = nextProps.match.params.id;
    const urlChanged = id !== params.id;
    if (urlChanged) {
      this.fetchData(id);
    }
  }

  fetchData(id: string) {
    const memoId = parseInt(id || '0', 10);
    const memo = fetchMemo(memoId);
    this.setState({ memo });
  }

  onDelete = () => {
    const {match: {params}} = this.props;
    const memoId = parseInt(params.id || '0', 10);
    deleteMemo(memoId);
    this.setState({
      deleted: true,
    })
  };

  render() {
    const { memo, deleted } = this.state;
    
    if (!memo) {
      return null;
    }

    if (deleted) {
      return <Redirect to={`/memo`} />
    }

    return (
      <React.Fragment>
        <Button onClick={this.onDelete}>삭제</Button>
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
}


export default MemoComponent;
