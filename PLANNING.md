# Kickball Manager

### Acceptance Criteria

- [ ] An authorized user can add a new team
- [ ] An authorized user can edit an existing team
- [ ] An authorized user can delete an existing team
- [x] Only authorized viewers should see Links to edit / delete
- [x] Unauthorized users are redirected to sign in if they try to access the new or edit routes
- [x] All users can view the `/teams` page
- [ ] Tests should continue to pass (you can update snapshots)


## NEEDS TO BE COMPLETED:
- [x] create dev branch
- [x] add supabase key/url
- [x] github secrets
- [x] netlify variables
- [x] Create a Supabase table called `teams` with city, name, state columns
- [x] Supabase enable row level security for the teams table
- [x]  Add policies for INSERT, DELETE, READ and UPDATE
- [x] Use `<ProtectedRoute>` component to properly protect the `/new`, and `/edit` routes 

- App.js To Do:
    - [x] import ProtectedRoute from './utils/ProtectedRoute
    - [x] add ProtectedRoute component to properly protect the
        - [x] `/new`, and
        - [x] `/edit` routes
        - [x] users redirected to sign-in if trying to access routes not signed in.
- Teams.js To Do:


