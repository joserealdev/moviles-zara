import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { mockFullProduct } from '@/mocks/product';
import ColorOptions from '.';

describe('ColorOptions', () => {
  const selectedValue = undefined;
  const setSelectedValue = jest.fn();

  test('renders correctly', () => {
    render(
      <ColorOptions
        colorOptions={mockFullProduct.colorOptions}
        selectedColor={selectedValue}
        setSelectedColor={setSelectedValue}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(mockFullProduct.colorOptions.length);
  });

  test('calls onClick with the new value', () => {
    const value = mockFullProduct.colorOptions[0];
    render(
      <ColorOptions
        colorOptions={mockFullProduct.colorOptions}
        selectedColor={selectedValue}
        setSelectedColor={setSelectedValue}
      />
    );

    const button = screen.getByTitle(value.name);
    fireEvent.click(button);

    expect(setSelectedValue).toHaveBeenCalledWith(value);
  });
});
