import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    borderColor: {
      control: { type: 'color' },
    },
    borderRadius: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    hoverable: {
      control: { type: 'boolean' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <>
    <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Card Title</h3>
    <p style={{ margin: '0 0 16px 0', color: '#666', lineHeight: '1.5' }}>
      This is some sample content for the card. It demonstrates how text and other 
      elements look within the card component.
    </p>
    <button 
      style={{ 
        padding: '8px 16px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Action Button
    </button>
  </>
);

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: <SampleContent />,
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: <SampleContent />,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    backgroundColor: '#f8f9fa',
    children: <SampleContent />,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: (
      <>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>Small Card</h4>
        <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
          Compact card content
        </p>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: (
      <>
        <h2 style={{ margin: '0 0 16px 0', color: '#333' }}>Large Card</h2>
        <p style={{ margin: '0 0 20px 0', color: '#666', lineHeight: '1.6' }}>
          This is a large card with more space for content. It can accommodate 
          longer text, multiple paragraphs, and various UI elements with comfortable spacing.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Primary
          </button>
          <button style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
            Secondary
          </button>
        </div>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Clickable Card</h3>
        <p style={{ margin: '0', color: '#666' }}>
          This entire card is clickable. Try clicking anywhere on it!
        </p>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Hoverable Card</h3>
        <p style={{ margin: '0', color: '#666' }}>
          Hover over this card to see the hover effect.
        </p>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <SampleContent />,
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3',
    children: (
      <>
        <h3 style={{ margin: '0 0 12px 0', color: '#1565c0' }}>Custom Colors</h3>
        <p style={{ margin: '0', color: '#1976d2' }}>
          This card uses custom background and border colors.
        </p>
      </>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div style={{ padding: '0' }}>
        <img 
          src="https://picsum.photos/400/200" 
          alt="Mountain landscape with lake" 
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Image Card</h3>
          <p style={{ margin: '0', color: '#666' }}>
            Card with no padding and an image that extends to the edges.
          </p>
        </div>
      </div>
    ),
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '800px' }}>
      <Card variant="default" hoverable>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Default Card</h3>
        <p style={{ margin: '0', color: '#666' }}>Standard card with border.</p>
      </Card>
      
      <Card variant="outlined" hoverable>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Outlined Card</h3>
        <p style={{ margin: '0', color: '#666' }}>Card with border only.</p>
      </Card>
      
      <Card variant="elevated" hoverable>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Elevated Card</h3>
        <p style={{ margin: '0', color: '#666' }}>Card with shadow.</p>
      </Card>
      
      <Card variant="filled" backgroundColor="#f8f9fa" hoverable>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Filled Card</h3>
        <p style={{ margin: '0', color: '#666' }}>Filled background card.</p>
      </Card>
    </div>
  ),
};
