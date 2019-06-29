import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";

interface MemoContentRouteMatchProps {
  id: string;
}

const MemoContent: React.FC<RouteComponentProps<MemoContentRouteMatchProps>> = props => {
  const { match } = props;

  return (
    <div>메모 id: {match.params.id}</div>
  );
}


export default MemoContent;
