import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Review from './Review';

// Mock the Rating component
jest.mock('../../components/Rating/Rating', () => {
  return function MockRating({ value, onChange, readOnly = false }) {
    return (
      <div data-testid="rating" data-value={value} data-readonly={readOnly.toString()}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            data-testid={`star-${index}`}
            onClick={() => !readOnly && onChange && onChange(index + 1)}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };
});

describe('Review Component', () => {
  test('renders existing testimonial and review form', () => {
    render(<Review />);
    
    // Check if existing testimonial is rendered
    expect(screen.getByText('What Clients Say')).toBeInTheDocument();
    expect(screen.getByText('Regina Miles')).toBeInTheDocument();
    expect(screen.getByText('Designer')).toBeInTheDocument();
    
    // Check if review form is rendered
    expect(screen.getByText('Share Your Experience')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Title/Role')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Share your experience with our services...')).toBeInTheDocument();
    expect(screen.getByText('Submit Review')).toBeInTheDocument();
  });

  test('handles form submission and shows confirmation', async () => {
    render(<Review />);
    
    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('Your Title/Role'), {
      target: { value: 'Software Engineer' }
    });
    fireEvent.change(screen.getByPlaceholderText('Share your experience with our services...'), {
      target: { value: 'Great service!' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit Review'));
    
    // Check if submitting state is shown
    expect(screen.getByText('Submitting...')).toBeInTheDocument();
    
    // Wait for confirmation to appear
    await waitFor(() => {
      expect(screen.getByText('Thank You!')).toBeInTheDocument();
    }, { timeout: 2000 });
    
    expect(screen.getByText('Your review has been submitted successfully. We appreciate your feedback!')).toBeInTheDocument();
    expect(screen.getByText('Submit Another Review')).toBeInTheDocument();
  });

  test('resets form after clicking "Submit Another Review"', async () => {
    render(<Review />);
    
    // Fill and submit form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.click(screen.getByText('Submit Review'));
    
    // Wait for confirmation
    await waitFor(() => {
      expect(screen.getByText('Thank You!')).toBeInTheDocument();
    }, { timeout: 2000 });
    
    // Click "Submit Another Review"
    fireEvent.click(screen.getByText('Submit Another Review'));
    
    // Check if form is reset and visible again
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('');
    expect(screen.getByText('Submit Review')).toBeInTheDocument();
  });

  test('rating component is interactive in form', () => {
    render(<Review />);

    const ratings = screen.getAllByTestId('rating');
    // First rating should be readonly (testimonial), second should be interactive (form)
    expect(ratings[0]).toHaveAttribute('data-readonly', 'true');
    expect(ratings[1]).toHaveAttribute('data-readonly', 'false');
  });
});
