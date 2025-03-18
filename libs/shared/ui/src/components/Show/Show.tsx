import React, { Children, ReactElement, ReactNode } from 'react';

interface IShowWhen {
  children: ReactNode;
  isTrue: boolean;
}
interface IShowElse {
  children: ReactNode;
  render?: ReactNode;
}

const Show: React.FC<{ children: ReactNode }> & {
  When: React.FC<IShowWhen>;
  Else: React.FC<IShowElse>;
} = ({ children }) => {
  let when: ReactElement | null = null;
  let otherwise: ReactElement | null = null;

  Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.isTrue === undefined) {
        otherwise = child as ReactElement;
      } else if (!when && child.props.isTrue === true) {
        when = child as ReactElement;
      }
    }
  });
  return when || otherwise || null;
};

Show.When = ({ isTrue, children }: IShowWhen): ReactElement | null => {
  return isTrue ? <>{children}</> : null;
};
Show.Else = ({ render, children }: IShowElse): ReactElement | null => {
  return <>{render || children}</>;
};

export default Show;
