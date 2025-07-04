import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled Option', value: '4', disabled: true },
  { label: 'Option 5', value: '5' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    textColor: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: sampleOptions,
    defaultValue: '2',
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    size: 'small',
    placeholder: 'Small dropdown',
  },
};

export const Large: Story = {
  args: {
    options: sampleOptions,
    size: 'large',
    placeholder: 'Large dropdown',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled dropdown',
  },
};

export const CustomColors: Story = {
  args: {
    options: sampleOptions,
    backgroundColor: '#e3f2fd',
    textColor: '#1976d2',
    placeholder: 'Custom colors',
  },
};

export const LongOptions: Story = {
  args: {
    options: [
      { label: 'This is a very long option that might overflow', value: '1' },
      { label: 'Another long option with lots of text', value: '2' },
      { label: 'Short', value: '3' },
      { label: 'Medium length option', value: '4' },
    ],
    placeholder: 'Select a long option',
  },
};
