import path from './path';
import icons from './icons';
const {
  TbCategory2,
  AiOutlineDashboard,
  MdGroups,
  TbBrandProducthunt,
  RiBillLine,
} = icons;
export const navigation = [
  {
    id: 1,
    value: 'Trang chủ',
    path: `${path.HOME}`,
  },
  {
    id: 2,
    value: 'Sản Phẩm',
    path: `/${path.PRODUCT}`,
  },
  {
    id: 3,
    value: 'Dịch Vụ',
    path: `/${path.SERVICES}`,
  },
  {
    id: 4,
    value: 'Liên hệ',
    path: `/${path.CONTACT}`,
  },
];
export const adminSidebar = [
  {
    id: 1,
    type: 'SIGNLE',
    text: 'Dashboard',
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icons: <AiOutlineDashboard />,
  },
  {
    id: 2,
    type: 'SIGNLE',
    text: 'Manage User',
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
    icons: <MdGroups />,
  },
  {
    id: 3,
    type: 'PARENT',
    text: 'Manage Product',
    icons: <TbBrandProducthunt />,
    submenu: [
      {
        text: 'Create Product',
        path: `/${path.ADMIN}/${path.CREATE_PRODUCT}`,
      },
      {
        text: 'Manage Product',
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCT}`,
      },
    ],
  },
  {
    id: 4,
    type: 'PARENT',
    text: 'Manage Category',
    icons: <TbCategory2 />,
    submenu: [
      {
        text: 'Create Category',
        path: `/${path.ADMIN}/${path.CREATE_CATEGORY}`,
      },
      {
        text: 'Manage category',
        path: `/${path.ADMIN}/${path.MANAGE_CATEGORY}`,
      },
    ],
  },
  {
    id: 5,
    type: 'SIGNLE',
    text: 'Manage Orders',
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icons: <RiBillLine />,
  },
];

export const roles = [
  {
    code: 0,
    value: 'admin',
  },
  {
    code: 1,
    value: 'user',
  },
];

export const BlockStatus = [
  {
    code: true,
    value: 'Block',
  },
  {
    code: false,
    value: 'Active',
  },
];
