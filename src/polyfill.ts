import { ObjectGroupBy } from "./implementation"

if (!("groupBy" in Object)) {
    // @ts-ignore
    Object.defineProperty(Object, "groupBy", {
        value: ObjectGroupBy,
        configurable: true,
        writable: true,
        enumerable: false,    
    })
}

