# SDEV2150 - Lesson 26: Server-State Management Exercises

These exercises help students strengthen their understanding of managing server-synchronized state in React using TanStack Query. 
Each activity focuses on practical use of `useQuery`, `useMutation`, query invalidation, and optimistic updates to maintain consistent and responsive UIs.

---

## Exercise 1: Basic Data Fetching with TanStack Query
**Goal:** Review and apply the fundamentals of fetching server-side data using TanStack Query.

**Instructions:**
1. Create a `ProductsList` component that uses `useQuery` to fetch products from an API (e.g., `https://fakestoreapi.com/products`) or locally, if you prefer.
2. Display product titles and prices in a styled list using Tailwind or DaisyUI.
3. Add loading and error states for a complete user experience.

**Acceptance Criteria:**
- Data loads from the API and displays correctly.
- Loading and error states appear at the appropriate times.
- The component refetches when the window regains focus.

**Stretch Challenge:**
- Add a manual "Refresh Data" button that triggers refetching.

**Key Concepts:** `useQuery`, query keys, loading and error handling

---

## Exercise 2: Mutations and Query Invalidation
**Goal:** Demonstrate how to update server-side data and refresh cached results automatically.

**Instructions:**
1. Create a `TasksList` component that fetches tasks (e.g., from `https://jsonplaceholder.typicode.com/todos?_limit=5`) or locally, if you prefer.
2. Add a button that adds a new task using `useMutation`.
3. After a successful mutation, invalidate the `tasks` query to refetch the updated list.

**Acceptance Criteria:**
- The new task appears after the mutation completes.
- Query invalidation triggers a refetch automatically.
- Error handling is implemented for failed requests.

**Stretch Challenge:**
- Display a success toast or visual confirmation after a successful mutation.

**Key Concepts:** `useMutation`, query invalidation, mutation side effects

---

## Exercise 3: Optimistic Updates for Better UX
**Goal:** Implement optimistic updates to provide instant visual feedback during mutations.

**Instructions:**
1. Extend the `TasksList` component to toggle a task’s completion state using `useMutation`.
2. Apply optimistic updates so the UI updates immediately before the server response returns.
3. Revert changes automatically if the mutation fails.

**Acceptance Criteria:**
- Task completion state updates instantly when toggled.
- If the mutation fails, the UI reverts to the previous state.
- The optimistic update improves perceived performance.

**Stretch Challenge:**
- Add a simulated network delay to visualize the impact of optimistic updates.

**Key Concepts:** optimistic updates, rollback logic, user feedback

---

## Exercise 4: Paginated or Dependent Queries
**Goal:** Practice advanced querying with dependent or paginated data.

**Instructions:**
1. Create a `UsersList` component that fetches paginated user data from an API (remote or local).
2. Implement Next and Previous buttons to navigate between pages.
3. Use query keys that depend on the current page number.
4. Optionally, create a `UserDetails` component that fetches detailed data based on a selected user ID (dependent query).

**Acceptance Criteria:**
- Navigation updates the data being fetched.
- Each page of results is cached and loads quickly on revisit.
- Dependent queries only run when their required data (e.g., user ID) is available.

**Stretch Challenge:**
- Combine pagination and dependent queries for more complex interactions.

**Key Concepts:** pagination, dependent queries, query keys, data reusability

---

### Suggested Timing
| **Time**    | **Activity** | **Focus**                                                     |
| ----------- | ------------ | ------------------------------------------------------------- |
| 0–20 min    | Exercise 1   | Query setup and basic fetching                                |
| 20–45 min   | Exercise 2   | Mutations and invalidation                                    |
| 45–70 min   | Exercise 3   | Optimistic updates and rollback                               |
| 70–100 min  | Exercise 4   | Pagination and dependent queries                              |
| 100–110 min | Reflection   | Discuss caching, Devtools insights, and workflow improvements |

---

**Instructor Notes:**
- Scaffold a simple API endpoint or use JSONPlaceholder for practice.
- Encourage students to observe cache behavior using React Query Devtools.
- For advanced learners, suggest experimenting with background refetch intervals or dependent queries for hierarchical data.
