export const transformer = {
  date: {
    from: (date: string | null) => {
      if (date) {
        const dSplit: number[] = date.split(/[- :]/).map((d) => parseInt(d, 10));
        return new Date(dSplit[0], dSplit[1] - 1, dSplit[2], dSplit[3], dSplit[4], dSplit[5]);
      }
    },
    to: (date?: string | null) => (date ? date.slice(0, 19).replace('T', ' ') : undefined),
  }
};
