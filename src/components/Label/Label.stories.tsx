import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'required', 'optional'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'bold'],
    },
    color: {
      control: { type: 'color' },
    },
    disabled: {
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
    children: 'Form Label',
  },
};

export const Required: Story = {
  args: {
    variant: 'required',
    children: 'Required Field',
  },
};

export const Optional: Story = {
  args: {
    variant: 'optional',
    children: 'Optional Field',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Label',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Label',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Label',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#007bff',
    children: 'Custom Color Label',
  },
};

export const Bold: Story = {
  args: {
    fontWeight: 'bold',
    children: 'Bold Label',
  },
};
