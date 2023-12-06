import { ValueTransformer } from 'typeorm';

export const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string | null) => {
      if (date) {
        const dSplit: number[] = date.split(/[- :]/).map((d) => parseInt(d, 10));
        return new Date(dSplit[0], dSplit[1] - 1, dSplit[2], dSplit[3], dSplit[4], dSplit[5]);
      }
    },
    to: (date?: Date) => (date ? date.toISOString().slice(0, 19).replace('T', ' ') : undefined),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
};
