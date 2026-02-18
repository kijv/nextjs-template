import { cva } from '@/css/cva';

export const textSize = {
  xs: 'text-1 leading-[1.35]',
  sm: 'text-2 leading-[1.45]',
  md: 'text-3 leading-[1.45]',
  lg: 'text-4 leading-[1.45]',
  xl: 'text-5 leading-tight',
  '2xl': 'text-6 leading-tight',
  '3xl': 'text-7 leading-tight',
} as const;

export const text = cva({
  variants: {
    size: textSize,
    hyphenate: {
      true: '[word-wrap:break-word] [word-break:break-word] wrap-break-word hyphens-auto',
    },
    ellipsis: {
      true: 'overflow-hidden text-ellipsis whitespace-nowrap',
    },
  },
});
