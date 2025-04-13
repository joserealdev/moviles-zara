import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { cartProductMock } from '@/mocks/product';
import CartProductCard from '.';

describe('CartProductCard', () => {
  const onDelete = jest.fn();

  test('renders correctly', () => {
    render(<CartProductCard item={cartProductMock} onDelete={onDelete} />);
    expect(screen.getByText(cartProductMock.name));
    expect(screen.getByText(`${cartProductMock.storage} | ${cartProductMock.color}`));
    expect(screen.getByText(`${cartProductMock.price} EUR`));
  });

  test('should navigate to product page', () => {
    render(<CartProductCard item={cartProductMock} onDelete={onDelete} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
