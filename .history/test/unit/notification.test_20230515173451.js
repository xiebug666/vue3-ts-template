import { mount } from "@vue/test-utils";
import Foo from "../../src/components/Foo.vue";
import { describe, expect, test } from "vitest";

describe("Foo.vue", () => {
  test("renders the correct style for error", () => {
    const type = "error";
    const wrapper = mount(Foo, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });

  test("renders correct style for success", () => {
    const type = "success";
    const wrapper = mount(Foo, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--success"])
    );
  });

  test("renders correct style for info", () => {
    const type = "info";
    const wrapper = mount(Foo, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--info"])
    );
  });

  test("slides down when message is not empty", () => {
    const message = "success";
    const wrapper = mount(Foo, {
      props: { message },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--slide"])
    );
  });
});
