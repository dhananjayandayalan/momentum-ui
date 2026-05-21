export type TokenPrimitive = number | string;

export interface TokenGroup {
  readonly [key: string]: TokenGroup | TokenPrimitive;
}

export interface TokenDefinition {
  readonly cssVar: `--momentum-${string}`;
  readonly name: string;
  readonly path: readonly string[];
  readonly value: TokenPrimitive;
}
