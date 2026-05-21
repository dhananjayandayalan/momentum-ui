import { colorTokens } from "./color-tokens.js";
import { createTokenDefinitions, createTokenMap, createTokensCss } from "./create-tokens.js";
import { breakpointTokens, shadowTokens, zIndexTokens } from "./layout-tokens.js";
import { motionTokens } from "./motion-tokens.js";
import { spacingTokens } from "./spacing-tokens.js";
import type { TokenDefinition } from "./token-types.js";
import { typographyTokens } from "./typography-tokens.js";

export { colorTokens } from "./color-tokens.js";
export { createTokenDefinitions, createTokenMap, createTokensCss } from "./create-tokens.js";
export { breakpointTokens, shadowTokens, zIndexTokens } from "./layout-tokens.js";
export { motionTokens } from "./motion-tokens.js";
export { spacingTokens } from "./spacing-tokens.js";
export type { TokenDefinition, TokenGroup, TokenPrimitive } from "./token-types.js";
export { typographyTokens } from "./typography-tokens.js";

export const tokenCollections = {
  breakpoint: breakpointTokens,
  color: colorTokens,
  motion: motionTokens,
  shadow: shadowTokens,
  spacing: spacingTokens,
  typography: typographyTokens,
  zIndex: zIndexTokens
} as const;

export const tokenDefinitions: TokenDefinition[] = createTokenDefinitions(tokenCollections);

export const tokenMap = createTokenMap(tokenDefinitions);

export const tokensCss = createTokensCss(tokenDefinitions);
