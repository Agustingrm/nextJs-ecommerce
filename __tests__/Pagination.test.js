import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Pagination from '../components/Pagination';
import { makePaginationMocksFor } from '../lib/testUtils';

describe('<Pagination/>', () => {
  it('dispalys a loading message', () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(1)}>
        <Pagination />
      </MockedProvider>
    );
    expect(container).toHaveTextContent('Loading...');
  });
  it('renders ágination for 18 items', async () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    expect(container).toHaveTextContent('Page 1 of 9');
    expect(container).toMatchSnapshot();
  });

  it('disables the prev page on the first page', async () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHabeAttribute('aria-disabled', 'true');
    expect(nextButton).toHabeAttribute('aria-disabled', 'false');
  });
  it('disables the next page on the last page', async () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={3} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHabeAttribute('aria-disabled', 'false');
    expect(nextButton).toHabeAttribute('aria-disabled', 'true');
  });
  it('enables all in middle page', async () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={2} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHabeAttribute('aria-disabled', 'false');
    expect(nextButton).toHabeAttribute('aria-disabled', 'false');
  });
});
