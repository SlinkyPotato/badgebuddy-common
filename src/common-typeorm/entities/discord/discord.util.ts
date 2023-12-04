import { ColumnOptions } from 'typeorm';

export const SnowFlakeOption = (name: string): ColumnOptions => ({
  name,
  unique: true,
  type: 'bigint',
  unsigned: true,
  transformer: {
    from: (bigInt: bigint) => bigInt.toString(),
    to: (bigInt?: string) => BigInt(bigInt),
  }
});
