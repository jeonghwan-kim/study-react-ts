import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';

interface Props {
  onSubmit(memo: Memo): void;
}

interface State {
  value: string
}

class AddMemoPage extends React.Component<Props, State> {
  readonly state = {
    value: '',
  }

  handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const {value} = evt.currentTarget;
    this.setState({ value })
  }

  handleClickSave = () => {
    const { onSubmit } = this.props;
    const {value} = this.state;
    const content = value.trim();
    if (!content) return;

    onSubmit({ content })
  }

  render() {
    const {value} = this.state;
    
    return (
      <React.Fragment>
        <form>
          <textarea 
            style={{
              width: '97%',
              height: '100px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              padding: '10px',
            }}
            placeholder="여기에 메모를 입력하세요" 
            onChange={this.handleChange}
            value={value} />
        </form>
        <Button to="/memo">취소</Button>
        <Button onClick={this.handleClickSave}>저장</Button>
      </React.Fragment>
    )
  }
}

export default AddMemoPage;
