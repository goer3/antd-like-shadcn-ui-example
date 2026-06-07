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
const customMainColor = '#000000';
const controlHeight = 28;
const customColorBlue = '#0052d9';

// 主题定制
const themeConfig = {
  zeroRuntime: true,
  token: {
    colorPrimary: customMainColor,
    colorPrimaryHover: customMainColor,
    colorLinkHover: customMainColor,
    colorLink: customColorBlue,
    controlItemBgActive: '#0000000a',
    controlItemBgHover: '#0000000a',
    lineHeight: '20px',
    fontFamily: 'MiSans, serif',
    fontSize: 13,
    controlInteractiveSize: 13,
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
      iconSize: 13,
      collapsedIconSize: 16,
      itemColor: customMainColor,
      itemHeight: 30,
      itemBg: customSiderBg,
      subMenuItemBg: customSiderBg,
      itemMarginInline: 20,
      itemPaddingInline: 0,
      itemMarginBlock: 4,
      itemActiveBg: '#e4e4e8',
      itemSelectedBg: '#e4e4e8',
      itemSelectedColor: customMainColor,
      dropdownWidth: 'auto'
    },
    Button: {
      contentFontSize: 12,
      contentFontSizeSM: 12,
      defaultShadow: 'none',
      primaryShadow: 'none',
      dangerShadow: 'none',
      controlHeight: controlHeight,
      controlHeightSM: 24,
      paddingInline: 10,
      paddingInlineSM: 10,
      blue6: customColorBlue
    },
    Form: {
      labelHeight: controlHeight
    },
    Input: {
      activeShadow: 'none',
      errorActiveShadow: 'none',
      warningActiveShadow: 'none',
      controlHeight: controlHeight,
      activeBorderColor: '#e5e5e5',
      paddingBlockSM: 4
    },
    InputNumber: {
      controlHeight: controlHeight,
      activeBorderColor: '#e5e5e5'
    },
    Slider: {
      railSize: 8,
      handleSize: 8,
      handleLineWidth: 1
    },
    Select: {
      optionHeight: controlHeight,
      optionLineHeight: '28px',
      optionPadding: '0 10px',
      optionSelectedBg: '#0000000a'
    },
    Table: {
      lineHeight: '32px',
      cellPaddingInline: 10,
      cellPaddingBlock: 0
    },
    Pagination: {
      itemSize: 20,
      itemActiveBg: 'transparent',
      itemActiveColor: 'red',
      itemActiveColorHover: 'red'
    },
    Dropdown: {
      paddingBlock: 5
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
