import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addMemo } from '../../apis';
import { Memo } from '../../models';

interface NewMemoState {
  value: string;
  saved: boolean;
}

class NewMemo extends React.Component<any, NewMemoState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: '',
      saved: false,
    }
  }

  handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const {value} = evt.currentTarget;
    this.setState({ value })
  }

  handleClickSave = () => {
    const {value} = this.state;
    const content = value.trim();
    if (!content) {
      return;
    }

    this.saveMemo({ content })
    this.redirectToMemo()
  }

  saveMemo(memo: Memo): Memo {
    return addMemo(memo)
  }

  redirectToMemo() {
    this.setState({
      saved: true,
    });
  }

  render() {
    const {value, saved} = this.state;
    
    if (saved) {
      return <Redirect to={`/memo`} />
    }

    return (
      <React.Fragment>
        <form>
          <textarea 
            placeholder="여기에 메모를 입력하세요" 
            onChange={this.handleChange}
            value={value} />
        </form>
        <Link to="/memo">취소</Link>
        <button onClick={this.handleClickSave}>저장</button>
      </React.Fragment>
    )
  }
}

export default NewMemo;
