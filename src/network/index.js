import axios from 'axios'
axios.defaults.baseURL = 'http://ykt1.cqaxfpw.com:5010';
axios.defaults.timeout = 8000;
axios.defaults.headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' };
// const sct = axios.create({
//     // 默认配置
//     baseURL: 'http://ykt1.cqaxfpw.com:5010',
//     //超时设置
//     timeout: 8000,
//     // 请求头的设置
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
// });

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export default axios;


