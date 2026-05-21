import type { TokenDefinition, TokenGroup, TokenPrimitive } from "./token-types.js";

const tokenNamePrefix = "momentum";

function isTokenPrimitive(value: TokenGroup | TokenPrimitive): value is TokenPrimitive {
  return typeof value === "number" || typeof value === "string";
}

function toKebabCase(segment: string): string {
  return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function flattenTokenGroup(group: TokenGroup, path: readonly string[] = []): TokenDefinition[] {
  return Object.entries(group).flatMap<TokenDefinition>(([key, value]) => {
    const nextPath = [...path, toKebabCase(key)];

    if (isTokenPrimitive(value)) {
      const name = `${tokenNamePrefix}-${nextPath.join("-")}`;
      const cssVar = `--${name}` as TokenDefinition["cssVar"];

      return [
        {
          cssVar,
          name,
          path: nextPath,
          value
        }
      ];
    }

    return flattenTokenGroup(value, nextPath);
  });
}

export function createTokenDefinitions(group: TokenGroup): TokenDefinition[] {
  return flattenTokenGroup(group);
}

export function createTokenMap(definitions: readonly TokenDefinition[]): Record<string, TokenPrimitive> {
  return Object.fromEntries(definitions.map((definition) => [definition.name, definition.value]));
}

export function createTokensCss(definitions: readonly TokenDefinition[]): string {
  const body = definitions
    .map((definition) => `    ${definition.cssVar}: ${String(definition.value)};`)
    .join("\n");

  return `@layer momentum-tokens {\n  :root {\n${body}\n  }\n}\n`;
}
