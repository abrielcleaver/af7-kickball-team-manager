import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Team';

it.skip('should render a team’s detail page', async () => {
  // MemoryRouter is needed because <Team> uses the <Link> component
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );

  await screen.findByText(/Bridge City Sneakers/);
  expect(container).toMatchSnapshot();
});
