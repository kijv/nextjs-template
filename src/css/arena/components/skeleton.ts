import './skeleton.css';
import { cva } from '@/css/cva';

export const skeleton = cva({
  base: [
    'relative overflow-hidden bg-gray-1 rounded-1',
    'after:animate-skeleton after:bg-gray-2 after:rounded-[inherit] after:absolute after:inset-0',
  ],
});
