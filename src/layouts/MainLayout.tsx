import React from 'react';
// components
import MainHeader from '../components/MainHeader/MainHeader';
import Spinner from '../components/Spinner/Spinner';

const MainLayout = (props: Props) => {
  const { children, title } = props;

  return (
    <>
      <MainHeader title={title} />
      {children}
      <Spinner />
    </>
  );

};

interface Props {
  children: React.ReactNode;
  title: string;
}

export default MainLayout;