import * as React from 'react';
import { Link } from 'react-router-dom';

class NewMemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <textarea>

          </textarea>
        </form>
        <Link to="/memo">취소</Link>
      </React.Fragment>
    )
  }
}

export default NewMemo;
