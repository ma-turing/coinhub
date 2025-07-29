import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select Component', () => {
  const mockOptions = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' }
  ];

  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test('calls onSelect handler when an option is clicked', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Open the dropdown by clicking the select trigger
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    
    // Click on the first option
    const firstOption = screen.getByText('Option 1');
    fireEvent.click(firstOption);
    
    // Verify onSelect was called
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  test('calls onSelect handler with correct option data', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Open the dropdown
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    
    // Click on the second option
    const secondOption = screen.getByText('Option 2');
    fireEvent.click(secondOption);
    
    // Verify onSelect was called with the correct option object
    expect(mockOnSelect).toHaveBeenCalledWith({ id: 2, text: 'Option 2' });
  });

  test('calls onSelect handler for different options', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Test clicking different options
    const selectTrigger = screen.getByText('Choose an option');
    
    // Click first option
    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 1'));
    expect(mockOnSelect).toHaveBeenLastCalledWith({ id: 1, text: 'Option 1' });
    
    // Click third option
    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 3'));
    expect(mockOnSelect).toHaveBeenLastCalledWith({ id: 3, text: 'Option 3' });
    
    // Verify onSelect was called twice
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
  });

  test('displays selected option text after selection', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Initially shows placeholder
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
    
    // Open dropdown and select an option
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 2'));
    
    // Verify the selected option is displayed
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Choose an option')).not.toBeInTheDocument();
  });

  test('closes dropdown after option selection', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Open dropdown
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    
    // Verify dropdown is open (all options are visible)
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
    
    // Select an option
    fireEvent.click(screen.getByText('Option 1'));
    
    // Verify dropdown is closed (options are no longer visible in dropdown)
    // Note: The selected option will still be visible as the displayed value
    const dropdownOptions = screen.queryAllByText('Option 2');
    const dropdownOption3 = screen.queryAllByText('Option 3');
    
    // These should not be visible in the dropdown anymore
    expect(dropdownOptions.length).toBe(0);
    expect(dropdownOption3.length).toBe(0);
  });

  test('does not call onSelect when dropdown trigger is clicked', () => {
    render(<Select options={mockOptions} onSelect={mockOnSelect} />);
    
    // Click the dropdown trigger (should only open/close dropdown)
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    
    // onSelect should not be called when just opening the dropdown
    expect(mockOnSelect).not.toHaveBeenCalled();
  });

  test('handles empty options array', () => {
    render(<Select options={[]} onSelect={mockOnSelect} />);
    
    // Should render without crashing
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
    
    // Click trigger - should not crash
    const selectTrigger = screen.getByText('Choose an option');
    fireEvent.click(selectTrigger);
    
    // onSelect should not be called
    expect(mockOnSelect).not.toHaveBeenCalled();
  });
});
