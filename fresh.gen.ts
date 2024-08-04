// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $button_base from "./islands/button-base.tsx";
import * as $button_ripple from "./islands/button-ripple.tsx";
import * as $checkbox from "./islands/checkbox.tsx";
import * as $input_text from "./islands/input-text.tsx";
import * as $input_textarea from "./islands/input-textarea.tsx";
import * as $select_multi from "./islands/select-multi.tsx";
import * as $select_single from "./islands/select-single.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/button-base.tsx": $button_base,
    "./islands/button-ripple.tsx": $button_ripple,
    "./islands/checkbox.tsx": $checkbox,
    "./islands/input-text.tsx": $input_text,
    "./islands/input-textarea.tsx": $input_textarea,
    "./islands/select-multi.tsx": $select_multi,
    "./islands/select-single.tsx": $select_single,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
