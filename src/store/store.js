import { reactive } from 'vue'

export const store = reactive({
    data: {
        projects: [],
    },
    axiosGetObject: {
        method: 'get',
        baseURL: 'http://localhost:8000',
    }
})