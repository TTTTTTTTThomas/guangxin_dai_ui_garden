import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table, { TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'bordered'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    responsive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleTableContent = () => (
  <>
    <TableHeader>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Email</TableCell>
        <TableCell as="th">Role</TableCell>
        <TableCell as="th" align="center">Actions</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
        <TableCell align="center">Edit</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
        <TableCell align="center">Edit</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>User</TableCell>
        <TableCell align="center">Edit</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell>3 users</TableCell>
        <TableCell>{""}</TableCell>
        <TableCell>{""}</TableCell>
      </TableRow>
    </TableFooter>
  </>
);

export const Default: Story = {
  args: {
    children: <SampleTableContent />,
  },
};

export const Striped: Story = {
  args: {
    variant: 'striped',
    children: <SampleTableContent />,
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: <SampleTableContent />,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: <SampleTableContent />,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: <SampleTableContent />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <SampleTableContent />,
  },
};

export const WithColoredRows: Story = {
  args: {
    children: (
      <>
        <TableHeader backgroundColor="#007bff" textColor="#ffffff">
          <TableRow>
            <TableCell as="th">Status</TableCell>
            <TableCell as="th">Task</TableCell>
            <TableCell as="th">Priority</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow variant="success">
            <TableCell>Completed</TableCell>
            <TableCell>Setup project</TableCell>
            <TableCell>High</TableCell>
          </TableRow>
          <TableRow variant="warning">
            <TableCell>In Progress</TableCell>
            <TableCell>Write documentation</TableCell>
            <TableCell>Medium</TableCell>
          </TableRow>
          <TableRow variant="danger">
            <TableCell>Blocked</TableCell>
            <TableCell>Deploy to production</TableCell>
            <TableCell>High</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};
