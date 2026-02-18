import { cva } from '@/css/cva';

export const button = cva({
  base: [
    'inline-flex shrink-0 flex-center text-center rounded-1 cursor-pointer font-sans select-none overflow-hidden whitespace-nowrap font-bold bg-gray-1 leading-0 gap-1',
    'hover:bg-gray-1 hover:text-gray-7 hover:border hover:border-gray-3',
    'active:bg-gray-1 active:text-gray-7 active:border active:border-gray-7',
    'focus-visible:bg-gray-1 focus-visible:text-gray-7 focus-visible:border focus-visible:border-focus focus-visible:outline-none',
    'disabled:pointer-events-none disabled:bg-gray-1 disabled:text-gray-4',
  ],
  variants: {
    size: {
      icon: [
        'size-[24px] text-1 max-1:size-9.25',
        'bg-background-heavy',
        'hover:bg-gray-1 hover:text-link hover:border hover:border-gray-1',
        'active:bg-gray-1 active:text-gray-7 active:border active:border-gray-3',
        'focus-visible:bg-gray-1 focus-visible:text-link focus-visible:border focus-visible:border-focus',
        'disabled:bg-transparent disabled:text-gray-4 disabled:border disabled:border-transparent',
      ],
      sm: 'h-[24px] px-2 text-1 max-1:h-9.25 max-1:px-3',
      md: 'h-[28px] px-3 text-2 max-1:h-9.25 max-1:px-4',
      lg: 'h-[32px] px-4 max-1:h-9.25 max-1:px-5',
      fill: 'h-[40px] px-4 text-3 w-full max-1:h-11.75',
    },
    variant: {
      primary: [
        'bg-blue-3 text-background',
        'hover:bg-blue-2 hover:text-background hover:border hover:border-blue-2',
        'active:bg-blue-2 active:text-background active:border active:border-blue-3',
        'focus-visible:bg-blue-3 focus-visible:text-background focus-visible:border focus-visible:border-blue-2',
        'disabled:bg-blue-1 disabled:text-gray-4',
      ],
      inverted: [
        'bg-link text-gray-1',
        'hover:bg-gray-7 hover:text-gray-1 hover:border hover:border-gray-6',
        'active:bg-gray-7 active:text-gray-0 active:border active:border-gray-5',
        'focus-visible:bg-gray-7 focus-visible:text-gray-1 focus-visible:border focus-visible:border-focus focus-visible:outline-none',
        'disabled:pointer-events-none disabled:bg-gray-6 disabled:text-gray-5',
      ],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
