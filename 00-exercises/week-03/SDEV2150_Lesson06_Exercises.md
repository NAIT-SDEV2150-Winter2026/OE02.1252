# SDEV2150 - Lesson 06: Component and Asynchronous Programming Exercises

These exercises reinforce asynchronous programming and web component concepts introduced in Lessons 02 through 05. 
Students will complete practical coding challenges that build their mastery of Promises, async/await, custom events, 
and API integration within reusable web components.

---

## Exercise 1: Asynchronous Image Loader Component
**Goal:** Reinforce understanding of asynchronous operations and the `fetch()` API.

**Instructions:**
1. Create a custom web component `<image-loader>` that fetches an image from a provided URL.
2. Display a loading message while the image is being retrieved.
3. Handle and display an error message if the image cannot be loaded.

**Key Concepts:** `connectedCallback()`, `async/await`, `fetch()`, `try/catch`, `DOM updates`

---

## Exercise 2: API Data Display Component
**Goal:** Combine asynchronous data fetching with dynamic rendering.

**Instructions:**
1. Build a `<user-list>` component that retrieves and displays users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
2. Add a "Reload Data" button that triggers a new fetch when clicked.
3. Display loading and error states to improve user experience.

**Key Concepts:** `fetch()`, `async/await`, `DOM updates`, `event handling`

---

## Exercise 3: Chained Promise Sequence
**Goal:** Practice sequential asynchronous logic using Promise chaining.

**Instructions:**
1. Fetch a list of posts, then use the first post's ID to fetch its comments.
2. Display the post title and its comments dynamically.
3. Handle network or parsing errors gracefully.

**Key Concepts:** `Promise chaining`, `sequential fetches`, `error handling`

---

## Exercise 4: Custom Event Integration
**Goal:** Reinforce communication between decoupled components.

**Instructions:**
1. Create two components: `<data-fetcher>` (fetches data) and `<data-display>` (renders data).
2. When fetching completes, dispatch a custom event named `data-loaded` containing the data.
3. Ensure `<data-display>` listens for the event and updates the UI accordingly.

**Key Concepts:** `Custom events`, `event dispatching`, `component communication`

---

## Exercise 5: Parallel API Requests
**Goal:** Demonstrate control over concurrent asynchronous operations.

**Instructions:**
1. Write a function that requests data from two APIs at the same time using `Promise.all()`.
2. Display both datasets after both requests succeed.
3. Use `Promise.allSettled()` to show results when one request fails.

**Key Concepts:** `Promise.all()`, `Promise.allSettled()`, `concurrency`, `error handling`

---

### Suggested Timing
| **Time** | **Activity** | **Focus** |
|-----------|---------------|-----------|
| 0–15 min | Exercises 1–2 | Async fundamentals (`fetch`, `await`, DOM updates) |
| 15–45 min | Exercises 3–4 | Sequential requests and event-driven communication |
| 45–90 min | Exercise 5 | Parallel async workflows and robust error handling |

---

**Instructor Notes:**
- Start with small, self-contained exercises before progressing to advanced chaining and parallel operations.
- Encourage peer collaboration for debugging and creative solutions.
- Emphasize proper error handling and clean asynchronous code structure.
