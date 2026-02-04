---
title: SDEV2150 - Lesson 07
subtitle: Framework Foundations with React
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 07: React Foundations

---

## Lesson Objectives

In this lesson, students will:

- Explain what a UI framework provides
- Describe how React components differ from Web Components
- Create static React components using JSX
- Apply Tailwind utility classes for layout and styling
- Identify a simple use of props as component inputs

---

## Agenda

- Why frameworks exist
- Introducing React and Vite
- JSX and component structure
- Tailwind for styling
- Static component composition

---
layout: nait-main-cover
---

# Connecting

---

## Where we are coming from

- Vanilla JavaScript
- Web Components
- Manual DOM updates

All of this still works.

Frameworks change *how* we organize and scale UI.

---
layout: nait-main-cover
---

# Why Frameworks?

---

## The problem they solve

- Growing UI complexity
- Repeated patterns
- Hard-to-track DOM updates

Libraries provide functionality, tools, and flexibility.

Frameworks provide structure and conventions. 

---

# Are frameworks libraries?

- Often, the term framework is applied to libraries
- It may be helpful to think of a framework as an opinionated library
- We will use the term framework as an umbrella term for in this course

---
layout: nait-main-cover
---

# React at a High Level

---

## What React gives us

- Component-based UI
- Declarative rendering
- A predictable mental model

React does not replace JavaScript.
It builds on it.
https://react.dev/

---
layout: nait-main-cover
---

# Vite as the Tooling Layer

---

## Why we use Vite

- Fast dev server
- Modern defaults
- Minimal configuration

Vite handles the build so we can focus on UI.

---
layout: nait-main-cover
---

# JSX

---

## HTML-like syntax in JavaScript

- Looks like HTML
- Lives inside JavaScript files
- Compiles to JavaScript

JSX describes what the UI *should look like*.

---
layout: nait-main-cover
---

# React Components

---

## Functions that return UI

- Components are functions
- They return JSX
- They describe part of the interface

For now, our components are static.

---
layout: nait-main-cover
---

# Static Components (For Now)

---

## What we are *not* doing yet

- No internal state
- No side effects
- Minimal prop usage

This keeps the focus on structure and styling.

---
layout: nait-main-cover
---

# A First Look at Props

---

## Props are inputs

- Passed into a component
- Read-only
- Used for display

---
layout: nait-main-cover
---

# Component Composition

---

## Building a page from pieces

- Small components
- Composed in `App.jsx`
- Each component has one responsibility

This replaces manual DOM assembly.

---
layout: nait-main-cover
---

# Tailwind CSS

---

## Utility-first styling

- No pre-built components
- Classes describe layout and spacing
- Styles live close to markup

Tailwind trades abstraction for clarity.
https://tailwindcss.com/

---
layout: nait-main-cover
---

# Styling Strategy

---

## What we focus on today

- Layout
- Spacing
- Alignment

Not pixel-perfect parity with Bootstrap.

---
layout: nait-main-cover
---

# Comparing Old and New

---

## Same domain, different tools

- Web Components vs React components
- `main.js` vs `main.jsx`
- Bootstrap vs Tailwind

Different abstractions, same UI goals.

---
layout: nait-main-cover
---

# Hands-On Practice

- Scaffold a React app with Vite
- Configure Tailwind CSS
- Create static components
- Compose them in `App.jsx`

Focus on structure and readability.

---

## Lesson Summary

- In this lesson, we covered the following:
   1. Explain what a UI framework/library provides
   2. Describe how React components differ from Web Components
   3. Create static React components using JSX
   4. Apply Tailwind utility classes for layout and styling
   5. Identify a simple use of props as component inputs

- Complete lesson 7 checklist

---
layout: nait-main-cover
---

# Exit Ticket

- What problem do frameworks solve?
- How is JSX different from HTML?
- What are props used for?