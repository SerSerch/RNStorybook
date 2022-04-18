import React from 'react';
import {Textable as TextableRN} from './index';

export default {
  title: 'Components/Text',
  decorators: [],
  components: TextableRN,
  args: {
    children:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  },
};

export const Textable = args => <TextableRN {...args}>{args.children}</TextableRN>;
