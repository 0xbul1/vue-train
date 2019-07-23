import axios from 'axios'
//增加默认请求路径
// 上线后删除
// axios.defaults.baseURL = 'http://localhost:9527';
//拦截器，将结果处理成res.data
axios.interceptors.response.use((res)=>{
     return res.data;
})
// 获取轮播数据 返回一个promise
export let getSliders=()=>{
     return axios.get('/sliders');
};
export let getHotBooks=()=>{
     return axios.get('/hot');
}
//获取全部图书
export let getAllBooks=()=>{
     return axios.get('/books');
}
//列表页删除某一本图书
export let removeBook=(id)=>{
     return axios.delete(`/books?id=${id}`);
}
//详情页获取某一本书
export let findOneBook=(id)=>{
     return axios.get(`/books?id=${id}`);
}

//详情页修改图书注意 ，请求体因为有好多信息
/**
 * @param id 编号
 * @param data 请求体发送
 * @returns {AxiosPromise}
 * 
 */
export let updateBook=(id,data)=>{
     return axios.put(`/books?id=${id}`,data);
}

export let addBook=(data)=>{
     return axios.post('/books',data);
}

export let getAll=()=>{
     return axios.all([getSliders(),getHotBooks()]);
}

// 根据offset偏移，请求对应数据的返回
export let pagination=(offset)=>{
     return axios.get(`/page?offset=${offset}`)
}