/* tslint:disable */
import * as wasm from './birbs_bg';

function freeBoidManager(ptr) {

    wasm.__wbg_boidmanager_free(ptr);
}
/**
*/
export class BoidManager {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeBoidManager(ptr);
    }

    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @returns {}
    */
    constructor(arg0, arg1, arg2) {
        this.ptr = wasm.boidmanager_new(arg0, arg1, arg2);
    }
    /**
    * @returns {void}
    */
    flock() {
        return wasm.boidmanager_flock(this.ptr);
    }
    /**
    * @returns {number}
    */
    items() {
        return wasm.boidmanager_items(this.ptr);
    }
    /**
    * @returns {number}
    */
    length() {
        return wasm.boidmanager_length(this.ptr);
    }
}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

