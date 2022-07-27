import { getDemoUrl } from '@/api/server';
import http from '@/http/api';

interface RequestDemoParams {
  name: string;
}
const getDemo = (data: RequestDemoParams) => {
  http.request({
    url: getDemoUrl,
    method: 'GET',
    data,
  });
};

export default { getDemo };
