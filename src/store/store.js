import { reactive } from 'vue'

export const store = reactive({
    data: {
        projects: [],
        pages: {
            last : 0,
            current : '',
        }
    },
    axiosGetObject: {
        method: 'get',
        baseURL: 'http://localhost:8000',

    }
})