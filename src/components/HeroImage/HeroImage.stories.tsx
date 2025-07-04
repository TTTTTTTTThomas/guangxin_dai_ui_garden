import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundPosition: {
      control: { type: 'text' },
    },
    backgroundSize: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'auto'],
    },
    contentAlignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    verticalAlignment: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom'],
    },
    overlayColor: {
      control: { type: 'color' },
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/1200/600',
    alt: 'Beautiful landscape',
    children: (
      <>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and beautiful designs</p>
      </>
    ),
  },
};

export const WithCustomHeight: Story = {
  args: {
    src: 'https://picsum.photos/1200/800',
    alt: 'Custom height hero',
    height: 600,
    children: (
      <>
        <h1>Tall Hero Section</h1>
        <p>This hero has a custom height of 600px</p>
      </>
    ),
  },
};

export const LeftAligned: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Left aligned content',
    contentAlignment: 'left',
    children: (
      <>
        <h1>Left Aligned</h1>
        <p>Content aligned to the left side</p>
      </>
    ),
  },
};

export const RightAligned: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Right aligned content',
    contentAlignment: 'right',
    children: (
      <>
        <h1>Right Aligned</h1>
        <p>Content aligned to the right side</p>
      </>
    ),
  },
};

export const TopAligned: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Top aligned content',
    verticalAlignment: 'top',
    children: (
      <>
        <h1>Top Aligned</h1>
        <p>Content aligned to the top</p>
      </>
    ),
  },
};

export const BottomAligned: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Bottom aligned content',
    verticalAlignment: 'bottom',
    children: (
      <>
        <h1>Bottom Aligned</h1>
        <p>Content aligned to the bottom</p>
      </>
    ),
  },
};

export const CustomOverlay: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Custom overlay',
    overlayColor: 'rgba(0, 123, 255, 0.6)',
    children: (
      <>
        <h1>Custom Blue Overlay</h1>
        <p>This hero has a blue overlay instead of black</p>
      </>
    ),
  },
};

export const LightOverlay: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Light overlay',
    overlayOpacity: 0.3,
    children: (
      <>
        <h1>Light Overlay</h1>
        <p>This hero has a lighter overlay for better image visibility</p>
      </>
    ),
  },
};

export const NoOverlay: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'No overlay',
    overlayOpacity: 0,
    children: (
      <>
        <h1 style={{ color: '#000', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)' }}>
          No Overlay
        </h1>
        <p style={{ color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
          This hero has no overlay - text color adjusted for visibility
        </p>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Clickable hero',
    onClick: () => alert('Hero clicked!'),
    children: (
      <>
        <h1>Clickable Hero</h1>
        <p>Click anywhere on this hero image</p>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/1200/500',
    alt: 'Disabled hero',
    disabled: true,
    children: (
      <>
        <h1>Disabled Hero</h1>
        <p>This hero is disabled and appears greyed out</p>
      </>
    ),
  },
};

export const BackgroundContain: Story = {
  args: {
    src: 'https://picsum.photos/800/400',
    alt: 'Background contain',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    overlayColor: 'rgba(255, 255, 255, 0.1)',
    children: (
      <>
        <h1 style={{ color: '#000' }}>Background: Contain</h1>
        <p style={{ color: '#000' }}>The image is contained within the hero area</p>
      </>
    ),
  },
};
