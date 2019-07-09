import * as React from 'react';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { Memo } from '../../models';
import { fetchMemo, deleteMemo, resotreMemo } from '../../apis';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

interface RemovedMemoMatchProps {
  id: string;
}

interface RemovedMemoState {
  memo?: Memo;
  restored: boolean;
}

class RemovedMemo extends React.Component<
  RouteComponentProps<RemovedMemoMatchProps>,
  RemovedMemoState
  > {
  constructor(props: RouteComponentProps<RemovedMemoMatchProps>) {
    super(props);

    this.state = {
      memo: undefined,
      restored: false,
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchData(params.id);
  }

  componentWillReceiveProps(nextProps: RouteComponentProps<RemovedMemoMatchProps>) {
    const { match: { params } } = this.props;
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

  onRestore = () => {
    const { match: { params } } = this.props;
    const memoId = parseInt(params.id || '0', 10);
    resotreMemo(memoId);
    this.setState({
      restored: true,
    })
  };

  render() {
    const { match } = this.props;
    const { memo, restored } = this.state;

    if (!memo) {
      return null;
    }

    if (restored) {
      return <Redirect to={`/trash`} />
    }
    
    return (
      <React.Fragment>
        <Button onClick={this.onRestore}>복구</Button>
        <div style={{
          borderTop: '1px solid #ddd',
          paddingTop: '10px',
        }}>
          <div style={{ 
              marginBottom: '15px'
            }}>{memo.createdAt && <DateString timestamp={memo.createdAt} />}</div>
          <div>{memo.content}</div>
        </div>
      </React.Fragment>

    );
  }
}


export default RemovedMemo;
