import { mount } from "@vue/test-utils";
import Foo from "../../src/components/Foo.vue";
import { describe, expect, test } from "vitest";

describe("Foo.vue", () => {
  test("renders the correct style for error", () => {
    const type = "info";
    const wrapper = mount(Foo, {
      props: { type },
    });
    console.log(123, wrapper.classes());
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });
});
