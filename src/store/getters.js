const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  permissions: state => state.user.permissions,
  setting: state => state.user.setting,
  username: state => state.user.username,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs,
  orderStatusOptions: state => state.serviceConst.orderStatusOptions,
  orderTypeOptions: state => state.serviceConst.orderTypeOptions,
  goodsTypeOptions: state => state.serviceConst.goodsTypeOptions,
  couponTypeOptions: state => state.serviceConst.couponTypeOptions,
  expires_in: state => state.token.expires_in
}
export default getters
