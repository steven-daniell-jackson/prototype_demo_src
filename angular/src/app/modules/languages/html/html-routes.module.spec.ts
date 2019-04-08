import { HtmlRoutesModule } from "./html-routes.module";

describe("HtmlRoutesModule", () => {
  let htmlRoutesModule: HtmlRoutesModule;

  beforeEach(() => {
    htmlRoutesModule = new HtmlRoutesModule();
  });

  it("should create an instance", () => {
    expect(htmlRoutesModule).toBeTruthy();
  });
});
