import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { blue } from "https://deno.land/std/fmt/colors.ts";

import { renderEjs } from "./ejs.ts";
import { renderHandlebars } from "./handlebars.ts";


Deno.test({
  name: blue("Testing renderEjs()"),
  fn(): void {
    const template = `Hobbies of <%=data.name%>`;

    const actual = renderEjs(template, { data: { name: "John" } });
    const expect = `Hobbies of John`;
    assertEquals(actual, expect);
  },
});

Deno.test({
  name: blue("Testing renderHandlebars()"),
  fn(): void {
    const template = `<h1>{{data.name}}</h1>`;

    const actual = renderHandlebars(template, { data: { name: "John" } });
    const expect = `<h1>John</h1>`;
    assertEquals(actual, expect);
  },
});
