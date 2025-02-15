import handlebars from "https://dev.jspm.io/handlebars@4.7.6";
import { Engine,ViewConfig } from "../types/index.ts";

const hb = <any> handlebars;

export const renderHandlebars: Engine = (
  template: string,
  data: object = {},
  config: ViewConfig = {}
): string => {
  return hb.compile(template)(data);
};
