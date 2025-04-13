import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { mockFullProduct } from '@/mocks/product';
import StorageOptions from '.';

describe('StorageOptions', () => {
  const selectedValue = undefined;
  const setSelectedValue = jest.fn();

  test('renders correctly', () => {
    render(
      <StorageOptions
        storageOptions={mockFullProduct.storageOptions}
        selectedStorage={selectedValue}
        setSelectedStorage={setSelectedValue}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(mockFullProduct.storageOptions.length);
  });

  test('calls onClick with the new value', () => {
    const value = mockFullProduct.storageOptions[0];
    render(
      <StorageOptions
        storageOptions={mockFullProduct.storageOptions}
        selectedStorage={selectedValue}
        setSelectedStorage={setSelectedValue}
      />
    );

    const button = screen.getByText(value.capacity);
    fireEvent.click(button);

    expect(setSelectedValue).toHaveBeenCalledWith(value);
  });
});
