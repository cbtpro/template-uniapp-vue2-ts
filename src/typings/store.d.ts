/**
 * vuex定义
 */
interface RootState {
  /**
   * 应用全局状态
   */
  app: AppState;
  base: BaseState,
}


interface UserRole {
  /**
   * TODO
   */
  id: string;
}

/**
 * vuex全局基础数据定义
 */
interface BaseState {
  version: string;
}
/**
 * vuex全局状态定义
 */
interface AppState {
  /**
   * 当前系统时间
   */
  now: number;
}
/**
 * vuex用户状态定义
 */
