# Kickball Manager

### Acceptance Criteria

- [ ] An authorized user can add a new team
- [ ] An authorized user can edit an existing team
- [ ] An authorized user can delete an existing team
- [ ] Only authorized viewers should see Links to edit / delete
- [ ] Unauthorized users are redirected to sign in if they try to access the new or edit routes
- [ ] All users can view the `/teams` page
- [ ] Tests should continue to pass (you can update snapshots)


## NEEDS TO BE COMPLETED:
- [x] create dev branch
- [x] add supabase key/url
- [x] github secrets
- [x] netlify variables
- [x] Create a Supabase table called `teams` with city, name, state columns
- [x] Supabase enable row level security for the teams table
- [x]  Add policies for INSERT, DELETE, READ and UPDATE
- [ ] Using the provided `<ProtectedRoute>` component to properly protect the `/new`, and `/edit` routes -- users should be redirected to the sign-in page if they try to access those routes while not signed in.

- App.js To Do:
    - [x] import ProtectedRoute from './utils/ProtectedRoute
    - [x] import useHistory from react-router-dom
    - [x] import Redirect from react
    - [x] add ProtectedRoute component to properly protect the
        - [x] `/new`, and
        - [x] `/edit` routes 


