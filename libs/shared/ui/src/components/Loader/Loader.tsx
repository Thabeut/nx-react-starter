import { Spin } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';

export interface IProps {
  size?: 'small' | 'default' | 'large';
  fullScreen?: boolean;
  className?: string;
}

const Loader: FC<IProps> = ({ size, fullScreen = false, className }) => {
  return (
    <div
      className={clsx(
        'h-full w-full flex justify-center items-center',
        className,
        {
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center':
            fullScreen,
        }
      )}
    >
      <Spin size={size} />
    </div>
  );
};

export default Loader;
