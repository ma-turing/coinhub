import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';

// Mock theme for styled-components
const mockTheme = {};

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('Button Component', () => {
  test('renders button with children', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders primary button with correct styles', () => {
    renderWithTheme(<Button primary>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#23A6F0',
      color: '#FFFFFF'
    });
  });

  test('renders secondary button with correct styles', () => {
    renderWithTheme(<Button secondary>Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#BDBDBD',
      color: '#FFFFFF'
    });
  });

  test('renders default button with correct styles', () => {
    renderWithTheme(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#FFFFFF',
      color: '#23A6F0'
    });
  });

  test('renders medium button with correct padding', () => {
    renderWithTheme(<Button medium>Medium Button</Button>);
    const button = screen.getByText('Medium Button');
    expect(button).toHaveStyle({
      padding: '15px 50px'
    });
  });

  test('renders rounded button with correct border radius', () => {
    renderWithTheme(<Button rounded>Rounded Button</Button>);
    const button = screen.getByText('Rounded Button');
    expect(button).toHaveStyle({
      borderRadius: '50px'
    });
  });

  test('renders borderless button with no border', () => {
    renderWithTheme(<Button borderless>Borderless Button</Button>);
    const button = screen.getByText('Borderless Button');
    expect(button).toHaveStyle({
      border: 'none'
    });
  });

  test('combines multiple props correctly', () => {
    renderWithTheme(<Button secondary medium rounded>Combined Button</Button>);
    const button = screen.getByText('Combined Button');
    expect(button).toHaveStyle({
      backgroundColor: '#BDBDBD',
      color: '#FFFFFF',
      padding: '15px 50px',
      borderRadius: '50px'
    });
  });
});
