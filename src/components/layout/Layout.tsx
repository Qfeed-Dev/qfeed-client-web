'use client';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

const LayoutWrapper = styled.div``;

export default Layout;
