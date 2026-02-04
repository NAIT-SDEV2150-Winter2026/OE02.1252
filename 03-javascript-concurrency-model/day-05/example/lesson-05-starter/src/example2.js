import React, { useEffect, useState } from "react";

/**
 * Free API used: https://jsonplaceholder.typicode.com/
 * Example endpoint: /posts/1
 */

export default function App() {
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Async function that fetches data (can be reused: on mount, on refresh, etc.)
  async function fetchPost(id, signal) {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { signal }
      );

      // fetch() only throws on network errors, so we handle HTTP errors ourselves
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`);
      }

      const json = await res.json(); // <- also async
      setData(json);
    } catch (err) {
      // Abort is not really an "error" the user needs to see
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  // Run whenever postId changes (classic async data pattern in React)
  useEffect(() => {
    const controller = new AbortController();

    fetchPost(postId, controller.signal);

    // Cleanup: abort the in-flight request if component unmounts or postId changes quickly
    return () => controller.abort();
  }, [postId]);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24, maxWidth: 720 }}>
      <h1>Async Data in React (Real API Call)</h1>

      <p style={{ color: "#444" }}>
        This example fetches a post from JSONPlaceholder. Try changing the ID
        quickly to see why aborting matters.
      </p>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <label>
          Post ID:&nbsp;
          <input
            type="number"
            min={1}
            max={100}
            value={postId}
            onChange={(e) => setPostId(Number(e.target.value))}
            style={{ width: 90, padding: 6 }}
          />
        </label>

        <button
          onClick={() => {
            const controller = new AbortController();
            fetchPost(postId, controller.signal);
          }}
          style={{ padding: "8px 12px" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      <div style={{ marginTop: 18, padding: 14, border: "1px solid #ddd", borderRadius: 10 }}>
        {loading && <p>Loading data… (async request in flight)</p>}

        {error && (
          <p style={{ color: "crimson" }}>
            Error: {error}
          </p>
        )}

        {!loading && !error && data && (
          <>
            <h2 style={{ marginTop: 0 }}>{data.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.body}</p>
            <small style={{ color: "#666" }}>
              userId: {data.userId} • postId: {data.id}
            </small>
          </>
        )}

        {!loading && !error && !data && (
          <p style={{ color: "#666" }}>No data yet.</p>
        )}
      </div>

      <hr style={{ margin: "22px 0" }} />

      <h3>What “asynchronous” means here</h3>
      <ul>
        <li>
          <code>fetch()</code> returns immediately with a Promise — React keeps rendering while the request runs.
        </li>
        <li>
          We show <b>loading</b> while awaiting the network + JSON parse.
        </li>
        <li>
          We handle <b>error</b> if the request fails.
        </li>
        <li>
          We update state when the Promise resolves — React re-renders with the new data.
        </li>
      </ul>
    </div>
  );
}
