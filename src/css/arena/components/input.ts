import { cva, cx } from '@/css/cva';
import { createCvaPoly } from '../util';
import { textSize } from './text';

export const input = cva({
  base: [
    'appearance-none font-sans m-0 outline-none p-0 w-full [-webkit-tap-highlight-color:transparent] bg-gray-1 text-gray-6 border border-transparent rounded-1 [-webkit-autofill]:[-webkit-background-clip:text]',
    'placeholder:text-slate',
    'hover:bg-gray-2 hover:text-gray-6 hover:placeholder:text-gray-6',
    'active:bg-gray-2',
    'focus:bg-gray-2 border-focus',
    'disabled:pointer-events-none disabled:bg-gray-2 disabled:text-gray-4 disabled:cursor-not-allowed disabled:placeholder:text-gray-4',
  ],
  variants: {
    variant: {
      default: [textSize.md, 'h-[40px] px-2'],
      title: [
        textSize.xl,
        'min-h-[40px] px-1 bg-transparent',
        'hover:bg-gray-1',
      ],
    },
    state: {
      invalid:
        'text-alert hover:text-alert placeholder:text-alert hover:placeholder:text-alert',
    },
    cursor: {
      default: 'cursor-default focus:cursor-text',
      text: 'cursor-text',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Input = createCvaPoly(input, 'input', {
  excludeKeys: ['variant', 'state', 'cursor'],
  moreProps: (cva, { className, variant, state, cursor }) => ({
    'data-testid': 'input',
    className: cx(className, input({ variant, state, cursor })),
  }),
});
