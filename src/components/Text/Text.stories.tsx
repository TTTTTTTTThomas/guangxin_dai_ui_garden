import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    lineHeight: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'relaxed'],
    },
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    truncate: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default text component.',
  },
};

export const Heading: Story = {
  args: {
    as: 'h1',
    size: '2xl',
    weight: 'bold',
    children: 'This is a heading',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'This is small text.',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    children: 'This is large text.',
  },
};

export const Bold: Story = {
  args: {
    weight: 'bold',
    children: 'This is bold text.',
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: 'This text is centered.',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#007bff',
    children: 'This text has a custom color.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'This is disabled text.',
  },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that will be truncated when it exceeds the available width.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
};
