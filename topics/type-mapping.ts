// # Topic: Type mappings

// Removes 'optional' attributes from a type's properties
type Concrete<T> = {
  [K in keyof T]-?: T[K];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// Removes 'readonly' attributes from a type's properties
type CreateMutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
