# SDEV2150 - Lesson 20: Routing and Data Fetching Exercises

These exercises reinforce routing and data-fetching concepts from Lessons 17 through 19. 
Students will practice building static and dynamic routes, loading data asynchronously, 
handling loading and error states, and improving user experience through progressive enhancement.

---

## Exercise 1: Static Layout Route with Navigation
**Goal:** Practice static routes, shared layout, and client-side navigation.

**Instructions:**
1. Create a `Layout` component that renders a top navigation and an `<Outlet>`.
2. Configure static routes: `/` (Home), `/about`, and `/data`.
3. Use `<Link>` for navigation or `<NavLink>` to indicate the active route.

**Acceptance Criteria:**
- Navigation persists across pages using a shared layout route.
- Active link styling is distinct using Tailwind utilities.
- Route changes occur without a full page reload.

**Stretch Challenge:**
- Add a NotFound route that renders when a path does not exist.

**Key Concepts:** React Router layout routes, navigation, SPA rendering

---

## Exercise 2: Static Data Page With Local JSON
**Goal:** Render data from a local JSON file.

**Instructions:**
1. Create a `DataPage` component that imports a small JSON array (3–6 objects). 
2. Render the items in a simple list or card layout using Tailwind.
3. Add a filter input that updates the visible list in real time.

**Acceptance Criteria:**
- Data renders correctly from a local JSON import.
- Filtering updates the displayed items dynamically.
- No errors occur since the data is locally available.

**Stretch Challenge:**
- Highlight matched substrings in the filtered results.

**Key Concepts:** local data, controlled inputs, array filtering, Tailwind styling

---

## Exercise 3: Dynamic Route With `useParams` and Client Fetch
**Goal:** Load and display detailed data based on a route parameter.

**Instructions:**
1. Add a route at `/posts` that fetches posts from `https://jsonplaceholder.typicode.com/posts` (or locally if you prefer).
2. Link each post to a dynamic route `/posts/:id`.
3. Create a `PostDetail` component that uses `useParams` to fetch and display a single post.

**Acceptance Criteria:**
- `/posts` lists post titles fetched from the API.
- Clicking a title navigates to `/posts/:id` without reloading.
- `PostDetail` correctly displays the selected post’s title and body.

**Stretch Challenge:**
- Add a Back link that returns to `/posts` and preserves scroll position.

**Key Concepts:** dynamic routes, `useParams`, asynchronous data fetching

---

## Exercise 4: Loading and Error UI With Retry
**Goal:** Implement loading indicators and graceful error handling.

**Instructions:**
1. Add a loading message or spinner while data is being fetched.
2. Display a clear error message when a request fails.
3. Include a `Retry` button to attempt fetching the data again.

**Acceptance Criteria:**
- Loading UI appears before data is available.
- Error UI includes a retry mechanism.
- Successful fetch replaces loading and error states appropriately.

**Stretch Challenge:**
- Simulate slow networks using `setTimeout` to verify loading visuals.

**Key Concepts:** conditional rendering, async error handling, retry logic

---

## Exercise 5: Nested Routes for a User Area
**Goal:** Organize related content using nested routes and a shared sublayout.

**Instructions:**
1. Create a parent route `/users` that lists users from `https://jsonplaceholder.typicode.com/users` (or locally if you prefer).
2. Link each user to `/users/:userId`.
3. Inside this route, add nested routes:
   - `/users/:userId/profile` shows name and email.
   - `/users/:userId/posts` lists that user’s posts.
4. Create a `UserLayout` with a sub-navigation for Profile and Posts.

**Acceptance Criteria:**
- `/users` lists all users fetched from the API.
- `/users/:userId` displays a user shell with sub-navigation.
- Nested routes render content correctly via `<Outlet>`.

**Stretch Challenge:**
- Use `<NavLink>` to highlight the active subtab.

**Key Concepts:** nested routes, shared layouts, child route rendering

---

## Exercise 6: Search Params and Pagination
**Goal:** Use URL search parameters to control data views.

**Instructions:**
1. Create a route `/posts-paged` that reads `page` from the URL search parameters (`?page=1`).
2. Fetch or slice posts based on the current page.
3. Add Next and Previous buttons that update the `page` parameter.

**Acceptance Criteria:**
- Page number is reflected in the URL and controls displayed data.
- Buttons disable when no next or previous page is available.
- The page can be bookmarked or shared with its state preserved.

**Stretch Challenge:**
- Add a `pageSize` search param to control results per page.

**Key Concepts:** search parameters, pagination, state via URL

---

## Optional Challenge: Prefetch on Hover
**Goal:** Improve performance by fetching data in advance.

**Instructions:**
1. On the posts list, trigger a background fetch when hovering over a post link.
2. Cache the fetched post data in memory for faster navigation.

**Acceptance Criteria:**
- Hovering begins background fetching.
- Navigating to a prefetched post shows little or no loading delay.

**Stretch Challenge:**
- Restrict prefetching to desktop pointer devices.

**Key Concepts:** prefetching, user experience optimization, caching

---

### Suggested Timing
| **Time**   | **Activity**            | **Focus**                                            |
| ---------- | ----------------------- | ---------------------------------------------------- |
| 0–20 min   | Exercises 1–2           | Static routing and local data rendering              |
| 20–45 min  | Exercise 3              | Dynamic routing and parameter-based data loading     |
| 45–65 min  | Exercise 4              | Loading and error handling patterns                  |
| 65–95 min  | Exercise 5              | Nested routes and sublayout organization             |
| 95–110 min | Exercise 6 or Challenge | Search params, pagination, and prefetch optimization |

---

**Instructor Notes:**
- Reinforce the connection between React Router routing and state-driven rendering.
- Encourage meaningful error and loading UI for production realism.
- Remind students to reuse layout and list components from earlier lessons where possible.
