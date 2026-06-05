import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Logo } from '@/components/image';
import { FooterText } from '@/components/text';

const { Content, Footer } = Layout;

const ErrorLayout = () => {
  return (
    <Layout>
      <div className="s-base-logo">
        <img src={Logo} alt="logo" />
        <span className="s-base-logo__title">ANTD SHADCN UI</span>
      </div>
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', lineHeight: '50px' }}>{FooterText}</Footer>
    </Layout>
  );
};

export default ErrorLayout;
