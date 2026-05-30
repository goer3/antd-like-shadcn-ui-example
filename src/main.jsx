import { createRoot } from 'react-dom/client';
import { ConfigProvider, App } from 'antd';

// 国际化
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
dayjs.locale('zh-cn');

// 样式
import 'antd/dist/antd.css';
import '@/assets/css/light.less';

// 字体
import 'misans/lib/Normal/MiSans-Regular.min.css';

// 路由组件
import { BrowserRouter } from 'react-router-dom';
import { GenerateRoutes } from '@/router/rules';

// 统一控制样式
const customMainBg = '#FFFFFF';
const customSiderBg = '#f7f8fa';
const controlHeight = 28;

// 主题定制
const themeConfig = {
  zeroRuntime: true,
  token: {
    colorPrimary: '#000000',
    colorPrimaryHover: '#000000',
    fontFamily: 'MiSans, serif',
    fontSize: 13,
    borderRadius: 0
  },
  components: {
    Layout: {
      headerBg: customMainBg,
      headerPadding: 0,
      bodyBg: customMainBg,
      footerBg: customMainBg,
      footerPadding: 0,
      headerHeight: 50,
      siderBg: customSiderBg
    },
    Menu: {
      iconSize: 14,
      collapsedIconSize: 16,
      itemColor: '#000000',
      itemHeight: 30,
      itemBg: customSiderBg,
      subMenuItemBg: customSiderBg,
      itemMarginInline: 20,
      itemPaddingInline: 0,
      itemMarginBlock: 4,
      itemActiveBg: '#e4e4e8',
      itemSelectedBg: '#e4e4e8',
      itemSelectedColor: '#000000',
      dropdownWidth: 'auto'
    },
    Button: {
      contentFontSize: 12,
      contentFontSizeSM: 11,
      defaultShadow: 'none',
      primaryShadow: 'none',
      dangerShadow: 'none',
      controlHeight: controlHeight,
      controlHeightSM: 20
    },
    Form: {
      labelHeight: controlHeight,
    },
    Input: {
      activeShadow: 'none',
      errorActiveShadow: 'none',
      warningActiveShadow: 'none',
      controlHeight: controlHeight,
      activeBorderColor: '#e5e5e5',
    },
    InputNumber: {
      controlHeight: controlHeight,
      activeBorderColor: '#e5e5e5', 
    },
    Slider: {
      railSize: 8,
      handleSize: 8,
      handleLineWidth: 1,
    }
  }
};

createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN} theme={themeConfig}>
    <App>
      <BrowserRouter>
        <GenerateRoutes />
      </BrowserRouter>
    </App>
  </ConfigProvider>
);
