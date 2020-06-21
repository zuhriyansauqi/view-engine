import { Engine } from "./types/index.ts";

import { renderEjs } from "./engines/ejs.ts";
import { renderHandlebars } from "./engines/handlebars.ts";
import { renderReact } from "./engines/react.ts";

class EngineFactory {
  constructor() {}

  // dynamic import at runtime
  getEjsEngine() {
    return renderEjs;
  }

  getHandlebarsEngine() {
    return renderHandlebars;
  }

}

export const engineFactory = new EngineFactory();
