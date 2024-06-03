import { Interceptor, InterceptorInterface, Action } from "routing-controllers";

@Interceptor()
export class DashboardInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return {
      success: true,
      data: content,
    };
  }
}