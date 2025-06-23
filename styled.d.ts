/* eslint-disable @typescript-eslint/no-empty-object-type */

import "styled-components";
import { ThemeType } from "./src/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
