/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-22 22:52:53
 * Last modified  : 2019-03-23 14:02:59
 */

const navConfig = [
  {
    id: '',
    name: '首页',
    icon: 'icon-guanli1',
    canRoute: true,
    c: () => import('../../pages/Index')
  },
  {
    id: "adminManage",
    name: "管理员管理",
    icon: 'icon-guanli1',
    children: [
      {
        id: "roleManage",
        name: "角色管理",
        canRoute: true,
        c: () => import('../../pages/RoleManage')
      },
      {
        id: "userManage",
        name: "用户管理",
        canRoute: true,
        c: () => import('../../pages/UserManage')
      },
      {
        id: "menuManage",
        name: "菜单管理",
        canRoute: true,
        c: () => import('../../pages/MenuManage')
      }
    ]
  },
  {
    id: "basicManage",
    name: "基础管理",
    icon: 'icon-guanli',
    children: [
      {
        id: "departmentManage",
        name: "部门管理",
        canRoute: true,
        c: () => import('../../pages/DepartmentManage')
      },
      {
        id: "staffManage",
        name: "员工管理",
        canRoute: true,
        c: () => import('../../pages/StaffManage')
      },
      {
        id: "areaManage",
        name: "区域管理",
        canRoute: true,
        c: () => import('../../pages/AreaManage')
      },
      {
        id: "providerManage",
        name: "供应商管理",
        canRoute: true,
        c: () => import('../../pages/ProviderManage')
      },
      {
        id: "customerManage",
        name: "客户管理",
        canRoute: true,
        c: () => import('../../pages/CustomerManage')
      },
      {
        id: "projectManage",
        name: "项目管理",
        canRoute: true,
        c: () => import('../../pages/ProjectManage')
      }
    ]
  },
  {
    id: "businessManage",
    name: "业务管理",
    icon: 'icon-hetongguanli',
    children: [
      {
        id: "orderManage",
        name: "采购订单",
        canRoute: true,
        c: () => import('../../pages/OrderManage')
      },
      {
        id: "prechargeManage",
        name: "预付款申请",
        canRoute: true,
        c: () => import('../../pages/PrechargeManage')
      },
      {
        id: "unsubscribeManage",
        name: "退订管理",
        canRoute: true,
        c: () => import('../../pages/UnsubscribeManage')
      },
      {
        id: "projectPayment",
        name: "合同人请款单",
        canRoute: true,
        c: () => import('../../pages/ProjectPayment')
      },
      {
        id: "projectAcceptance",
        name: "工程验收",
        canRoute: true,
        c: () => import('../../pages/ProjectAcceptance')
      },
      {
        id: "projectResult",
        name: "工程结算",
        canRoute: true,
        c: () => import('../../pages/ProjectResult')
      },
      {
        id: "qualityResult",
        name: "质保结算",
        canRoute: true,
        c: () => import('../../pages/QualityResult')
      },
      {
        id: "measurementBill",
        name: "计量计价单",
        canRoute: true,
        c: () => import('../../pages/MeasurementBill')
      },
      {
        id: "visaResult",
        name: "签证结算",
        canRoute: true,
        c: () => import('../../pages/VisaResult')
      },
      {
        id: "paymentForm",
        name: "付款单",
        canRoute: true,
        c: () => import('../../pages/PaymentForm')
      },
    ]
  }
];

export default navConfig;
