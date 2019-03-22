/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-22 22:52:53
 * Last modified  : 2019-03-22 23:42:50
 */

const navConfig = [
  {
    id: "adminManage",
    name: "管理员管理",
    children: [
      {
        id: "roleManage",
        name: "角色管理",
        canRoute: true
      },
      {
        id: "userManage",
        name: "用户管理",
        canRoute: true
      },
      {
        id: "menuManage",
        name: "菜单管理",
        canRoute: true
      }
    ]
  },
  {
    id: "basicManage",
    name: "基础管理",
    children: [
      {
        id: "departmentManage",
        name: "部门管理",
        canRoute: true
      },
      {
        id: "staffManage",
        name: "员工管理",
        canRoute: true
      },
      {
        id: "areaManage",
        name: "区域管理",
        canRoute: true
      },
      {
        id: "providerManage",
        name: "供应商管理",
        canRoute: true
      },
      {
        id: "customerManage",
        name: "客户管理",
        canRoute: true
      },
      {
        id: "projectManage",
        name: "项目管理",
        canRoute: true
      }
    ]
  },
  {
    id: "业务管理",
    name: "businessManage",
    children: [
      {
        id: "orderManage",
        name: "采购订单",
        canRoute: true
      },
      {
        id: "prechargeManage",
        name: "预付款申请",
        canRoute: true
      },
      {
        id: "unsubscribeManage",
        name: "退订管理",
        canRoute: true
      },
      {
        id: "projectPayment",
        name: "合同人请款单",
        canRoute: true
      },
      {
        id: "projectAcceptance",
        name: "工程验收",
        canRoute: true
      },
      {
        id: "projectResult",
        name: "工程结算",
        canRoute: true
      },
      {
        id: "qualityResult",
        name: "质保结算",
        canRoute: true
      },
      {
        id: "measurementBill",
        name: "计量计价单",
        canRoute: true
      },
      {
        id: "visaResult",
        name: "签证结算",
        canRoute: true
      },
      {
        id: "paymentForm",
        name: "付款单",
        canRoute: true
      },
    ]
  }
];

export default navConfig;
