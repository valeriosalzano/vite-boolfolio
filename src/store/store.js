import { reactive } from 'vue'

export const store = reactive({
    data: {
        projects: [],
    },
    axiosGetObject: {
        method: 'get',
        baseURL: 'http://localhost:8000',
    },
    axiosPostObject: {
        method: 'post',
        baseURL: 'http://localhost:8000',
        data: {},
    }
})