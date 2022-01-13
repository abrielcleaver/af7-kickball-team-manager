import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Team from './Team';

it.skip('should render a team’s detail page', async () => {
  // MemoryRouter is needed because <Team> uses the <Link> component
  const { container } = render(
    <MemoryRouter initialEntries={['/teams/2']}>
      <Route path="/teams/:id">
        <Team />
      </Route>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  
  await screen.findByText(/Bridge City Sneakers/);
  expect(container).toMatchSnapshot();
});
