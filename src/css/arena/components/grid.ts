import type { VariantProps } from 'cva';
import { createPoly } from '../util';
import { cva } from '@/css/cva';

export const grid = cva({
  base: 'grid gap-3 justify-cetner grid-cols-[repeat(auto-fill,minmax(260px,1fr))]',
  variants: {
    layout: {
      compact:
        'grid-cols-[repeat(auto-fill,minmax(220px,1fr))] max-1:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] max-1:gap-2',
      '2up':
        'max-1:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] max-1:gap-1',
    },
  },
});

export const Grid = createPoly<VariantProps<typeof grid>>('div', {
  excludeKeys: ['layout'],
  moreProps: ({ className, layout }) => ({
    className: grid({ className, layout }),
  }),
});
