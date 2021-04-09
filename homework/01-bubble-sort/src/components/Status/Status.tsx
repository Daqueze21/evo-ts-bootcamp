import React from 'react'

//
type Props = {
  status: boolean;
};

export const Status: React.FunctionComponent<Props> = ({status}) => {
  const sortStatus = status ? 'Solved' : 'Not solved';
  
  return <pre>{sortStatus}</pre>;;
};

export default Status;