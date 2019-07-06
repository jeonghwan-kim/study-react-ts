import * as React from 'react';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { Memo } from '../../models';
import { fetchMemo, deleteMemo } from '../../apis';

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
        <button onClick={this.onDelete}>delete</button>
        <div>{memo.createdAt}</div>
        <div>{memo.content}</div>
      </React.Fragment>
      
    );
  }
}


export default MemoComponent;
