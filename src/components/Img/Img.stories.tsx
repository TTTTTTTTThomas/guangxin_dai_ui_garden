import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    objectFit: {
      control: { type: 'select' },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    borderRadius: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Sample image',
    width: 300,
    height: 200,
  },
};

export const WithBorderRadius: Story = {
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'Rounded image',
    width: 300,
    height: 300,
    borderRadius: '16px',
  },
};

export const CircularImage: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Circular image',
    width: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export const Clickable: Story = {
  args: {
    src: 'https://picsum.photos/250/200',
    alt: 'Clickable image',
    width: 250,
    height: 200,
    onClick: () => alert('Image clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Disabled image',
    width: 300,
    height: 200,
    disabled: true,
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    fallbackSrc: 'https://picsum.photos/300/200',
    alt: 'Image with fallback',
    width: 300,
    height: 200,
  },
};

export const ObjectFitContain: Story = {
  args: {
    src: 'https://picsum.photos/400/200',
    alt: 'Object fit contain',
    width: 300,
    height: 300,
    objectFit: 'contain',
    borderRadius: '8px',
  },
};

export const ObjectFitCover: Story = {
  args: {
    src: 'https://picsum.photos/400/200',
    alt: 'Object fit cover',
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export const ResponsiveImage: Story = {
  args: {
    src: 'https://picsum.photos/800/400',
    alt: 'Responsive image',
    width: '100%',
    height: 'auto',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px solid #ccc', padding: '16px' }}>
        <h3>Responsive container</h3>
        <Story />
      </div>
    ),
  ],
};
