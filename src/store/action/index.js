import axios from "axios";
import { useDispatch } from "react-redux";

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
});

//dispatch用于向reducer发起请求修改数据
//自定义hooks：获取主题列表
function useTopics(){
    let dispatch = useDispatch();//组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件
    //hooks只能在最外层调用，调用hooks时返回一个请求
    return function(page=1,tab="all",limit=15,mdrender=true){
        dispatch({
            type:"topics_loading"
        });
        http.get(`/topics?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`).then((res) => {
            // console.log(res);
            dispatch({
                type:"topics_loadover",
                data: res.data.data
            })
        })
    }
}

//获取主题详情
function useTopic(){
    let dispatch = useDispatch();
    //hooks只能在最外层调用，调用hooks时返回一个请求
    return function(id){
        dispatch({
            type:"topic_loading"
        });
        http.get(`/topic/${id}`).then((res) => {
            // console.log(res);
            dispatch({
                type:"topic_loadover",
                data: res.data.data
            })
        }).catch((err) => {
            dispatch({
                type:"topic_error",
                errorMsg:err.response.data.error_msg
            })
            // console.dir(err)
        })
    }
}

function useUserDetail(){
    let dispatch = useDispatch();//组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件
    //hooks只能在最外层调用，调用hooks时返回一个请求
    return function(loginname){
        dispatch({
            type:"user_loading"
        });
        http.get(`/user/${loginname}`).then((res) => {
            // console.log(res)
            dispatch({
                type:"user_loadover",
                data: res.data.data
            })
        })
    }
}

export {useTopics,useTopic,useUserDetail};