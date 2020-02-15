import req from './request';

export const testRequest = () => {
    const rr = req.get('/test/realm/getStudyRealm')
    console.log('rr', rr instanceof Promise)
    return rr;
};
