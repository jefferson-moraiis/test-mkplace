import NodeCache from 'node-cache';

class CacheUtil {
    constructor(protected cacheService = new NodeCache()) { }

    // TTL in seconds
    public set(key: string, value: any, ttl = 3600) {
        return this.cacheService.set(key, value, ttl);
    }
    public setArray(key: string, value: any, ttl = 3600) {
        return this.cacheService.mset([key, value, ttl]);
    }

    public get(key: string){
        return this.cacheService.get(key);
    }
    public getAll(key:string){
        return this.cacheService.mget([key]);
    }
    


    public clearAllCache(){
        return this.cacheService.flushAll();
    }
}

export default new CacheUtil();