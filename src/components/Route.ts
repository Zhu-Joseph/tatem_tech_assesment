import React, { ReactNode } from 'react';

interface Props {
  path: string
  children: ReactNode
}

const Route: React.FC<Props> = ({ path, children }) => {
  return window.location.pathname === path ? children : null
}

export default Route