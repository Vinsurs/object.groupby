import { describe, it, expect } from "vitest"
import { ObjectGroupBy } from "../src/implementation"

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];
describe("ObjectGroupBy", () => {
    it("will return a null-prototype object", () => {
        const result = ObjectGroupBy(inventory, ({ type }) => type)
        expect(result).toBeTypeOf("object")
        expect(Object.getPrototypeOf(result)).toBe(null)
    })
    it("will return a empty object when items is empty", () => {
        const result = ObjectGroupBy([], ({ type }) => type)
        expect(result).toBeTypeOf("object")
        expect(Object.keys(result).length).toBe(0)
    })
    it("will return a grouped object when items is not empty", () => {
        const result = ObjectGroupBy(inventory, ({ type }) => type)
        expect(result).toBeTypeOf("object")
        expect(Object.keys(result).length).not.toBe(0)
        expect(result).toEqual({
            vegetables: [
              { name: 'asparagus', type: 'vegetables', quantity: 5 },
            ],
            fruit: [
              { name: "bananas", type: "fruit", quantity: 0 },
              { name: "cherries", type: "fruit", quantity: 5 }
            ],
            meat: [
              { name: "goat", type: "meat", quantity: 23 },
              { name: "fish", type: "meat", quantity: 22 }
            ]
          })
    })
    it("should accept symbol key returned by callback function", () => {
        const result = ObjectGroupBy(inventory, ({ type }) => Symbol.for(type))
        expect(result).toBeTypeOf("object")
        expect(Object.getOwnPropertySymbols(result)[0]).toEqual(Symbol.for("vegetables"))
    })
    it("callback function return a value that can get coerced into a property key", () => {
        const result = ObjectGroupBy(inventory, () => ({}))
        expect(result).toBeTypeOf("object")
        expect(Object.keys(result).length).toBe(1)
        expect(Object.keys(result)[0]).toBe("[object Object]")
    })
})