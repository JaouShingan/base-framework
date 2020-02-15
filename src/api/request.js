import axios from 'axios';
import pkg from '../../package.json';

const instance = axios.create({
    baseURL: pkg.BASE_URL,
    timeout: 5000, // 超时5秒
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// 请求拦截器
instance.interceptors.request.use(
    function (config) {
        /**
         * 可以在此处添加headers [config.headers] 或其他操作
         */
        return config;
    },
    function (error) {
        Promise.reject(error);
    }
)

// 响应拦截器
instance.interceptors.response.use(
	function (response) {
        // 当且仅当config 里 allResponse 为true时，返回整个响应，否则仅返回响应里的data
		if (response.config.allResponse) {
			return response;
		} else {
			return response.data;
		}
	},
	function (error) {
		Promise.reject(error);
	}
);

// 导出
export default instance;