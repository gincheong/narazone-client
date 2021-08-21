import React from 'react';
// components
import MainHeader from '../components/MainHeader/MainHeader';

const MainLayout = (props: Props) => {
  const { children, title } = props;

  return (
    <>
      <MainHeader title={title} />
      {children}
    </>
  );

};

interface Props {
  children: React.ReactNode;
  title: string;
}

export default MainLayout;