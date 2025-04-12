"use client";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { NextRouter } from "next/router";
import CartLink from ".";

describe("CartLink", () => {
  const router: Partial<NextRouter> = {
    push: jest.fn(),
    prefetch: jest.fn(),
  };

  test("should navigate to cart", () => {
    render(
      <RouterContext.Provider value={router as NextRouter}>
        <CartLink />
      </RouterContext.Provider>
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(router.push).toHaveBeenCalledWith(
      "/cart",
      expect.objectContaining({})
    );
  });
});
