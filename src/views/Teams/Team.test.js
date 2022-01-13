import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Team from './Team';

it('should render a team’s detail page', async () => {
  // MemoryRouter is needed because <Team> uses the <Link> component
  const { container } = render(
    <MemoryRouter>
      <Route path="/teams/:id">
        <Team />
      </Route>
      <Team match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  
  await screen.findAllByText(/Rip City Kickers/);
  expect(container).toMatchSnapshot();
});
