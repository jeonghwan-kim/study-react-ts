import * as React from 'react';
import { Link } from 'react-router-dom';

const AddMemoBtn: React.FC = () => {
  return (
    <Link to="/memo/add">새로운 메모</Link>
  )
}

export default AddMemoBtn;
