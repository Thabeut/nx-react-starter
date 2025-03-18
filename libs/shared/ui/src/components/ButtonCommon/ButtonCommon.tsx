import React, { FC, ReactNode } from 'react';
import { Button } from 'antd';

interface IProps {
  children: ReactNode;
}

const ButtonCommon: FC<IProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default ButtonCommon;
