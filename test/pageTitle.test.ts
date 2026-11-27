import { describe, expect, it } from "vitest";
import type { QuartzComponentProps } from "@quartz-community/types";
import { PageTitle } from "../src/index";
import { renderToHtml } from "./render";

const render = (
  slug: string,
  cfg: Record<string, unknown> = { pageTitle: "My Garden" },
  displayClass?: string,
) =>
  renderToHtml(
    PageTitle()({ fileData: { slug }, cfg, displayClass } as unknown as QuartzComponentProps),
  );

describe("PageTitle", () => {
  it("links the site's pageTitle to the site root", () => {
    expect(render("index")).toBe('<h2 class="page-title"><a href=".">My Garden</a></h2>');
  });

  it.each([
    ["notes/idea", ".."],
    ["notes/deep/idea", "../.."],
    ["notes/index", ".."],
    ["tags/some-tag", ".."],
  ])("links back to the root from %s", (slug, href) => {
    expect(render(slug)).toContain(`<a href="${href}">`);
  });

  it("falls back to the localized default title without a pageTitle", () => {
    expect(render("index", {})).toContain(">Untitled</a>");
  });

  it("adds the layout's display class and ships its CSS", () => {
    expect(render("index", { pageTitle: "T" }, "mobile-only")).toContain(
      'class="mobile-only page-title"',
    );
    expect(PageTitle().css).toContain(".page-title");
  });
});
