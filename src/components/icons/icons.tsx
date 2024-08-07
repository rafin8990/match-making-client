
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

export const iconVariants = cva('', {
  variants: {
    size: {
      '16': 'w-4 h-4',
      '24': 'w-6 h-6',
      '32': 'w-8 h-8',
      '40': 'w-10 h-10',
      '48': 'w-12 h-12',
      '80': 'w-20 h-20',
      '128': 'w-32 h-32',
      '160': 'w-40 h-40',
    },
  },
  defaultVariants: {
    size: '16',
  },
});

interface SvgProps extends React.SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {}

export type IconType = SvgProps;
