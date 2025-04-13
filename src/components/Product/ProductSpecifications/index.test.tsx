import { render, screen } from '@testing-library/react';
import React from 'react';
import { mockFullProduct } from '@/mocks/product';
import ProductSpecifications from '.';

const specificationTypeArray = [
  'brand',
  'name',
  'description',
  'screen',
  'resolution',
  'processor',
  'main camera',
  'selfie camera',
  'battery',
  'os',
  'screen refresh rate',
];

describe('ProductSpecifications', () => {
  test('renders correctly', () => {
    render(<ProductSpecifications product={mockFullProduct} />);

    specificationTypeArray.forEach((name) => expect(screen.getByText(name)));
  });
});
