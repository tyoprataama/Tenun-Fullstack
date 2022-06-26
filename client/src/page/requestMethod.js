import axios from 'axios';

const LOCAL_URL = 'http://localhost:5001/api/';
//  Admin login token
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTAzOTVhNjAwYzNiNzg1YTExNzIwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTUzNDM5MiwiZXhwIjoxNjU1NzA3MTkyfQ.V88xiIrAF6afG3-yRrkWfMJK_0jpOsrT_lCG3AW9WGY';

export const publicRequest = axios.create({
    localURL: LOCAL_URL,
});

export const userRequest = axios.create({
    localURL: LOCAL_URL,
    header: {token:`Bearer ${TOKEN}`},
});