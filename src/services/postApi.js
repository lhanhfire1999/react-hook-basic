import axiosClient from "./axiosClient";

const postList = {
  getPost: (params) => {
    const url = '/posts'
    return  axiosClient.get(url, {params});
  },
}

export default postList;