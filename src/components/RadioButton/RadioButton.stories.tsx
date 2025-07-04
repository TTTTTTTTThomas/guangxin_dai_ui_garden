import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    checkedColor: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default',
    value: 'option1',
    label: 'Default Radio Button',
  },
};

export const Checked: Story = {
  args: {
    name: 'checked',
    value: 'option1',
    label: 'Checked Radio Button',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    value: 'option1',
    label: 'Disabled Radio Button',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked',
    value: 'option1',
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

export const Small: Story = {
  args: {
    name: 'small',
    value: 'option1',
    label: 'Small Radio Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    name: 'large',
    value: 'option1',
    label: 'Large Radio Button',
    size: 'large',
  },
};

export const LabelLeft: Story = {
  args: {
    name: 'label-left',
    value: 'option1',
    label: 'Label on Left',
    labelPosition: 'left',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'custom-color',
    value: 'option1',
    label: 'Custom Color',
    checked: true,
    checkedColor: '#ff6b6b',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3>Choose your favorite color:</h3>
      <RadioButton
        name="color"
        value="red"
        label="Red"
        checkedColor="#ff6b6b"
      />
      <RadioButton
        name="color"
        value="blue"
        label="Blue"
        checkedColor="#4dabf7"
        defaultChecked
      />
      <RadioButton
        name="color"
        value="green"
        label="Green"
        checkedColor="#51cf66"
      />
      <RadioButton
        name="color"
        value="purple"
        label="Purple (Disabled)"
        checkedColor="#845ef7"
        disabled
      />
    </div>
  ),
};
