import userInfo from './userInfo';

export default interface AllUserInfo {
    count: number;
    limit: number;
    offset: number;
    results: userInfo[];
    total: number;
}
