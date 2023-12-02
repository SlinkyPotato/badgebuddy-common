import { ValueTransformer } from 'typeorm';

export const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(date),
    to: (date?: Date) => date?.toISOString(),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
};
