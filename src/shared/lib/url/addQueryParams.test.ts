import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
    test("should with one param", () => {
        const params = getQueryParams({ test: "value" });
        expect(params).toBe("?test=value");
    });
    test("should with multiple param", () => {
        const params = getQueryParams({ test: "value", title: "test" });
        expect(params).toBe("?test=value&title=test");
    });
    test("should with undefined", () => {
        const params = getQueryParams({ test: "value", title: undefined });
        expect(params).toBe("?test=value");
    });
});
