---
title: Overview
sidebar_position: 3
---

## Codebase Overview

- `~` - Contains config files for the project and some auth logic.
- `app` - This is where the majority of the app code will live. Mostly equivalent to `src`. This is also the router next uses, built on react server components. Your layout and folder names determine routing, loading states, error handling, and other stuff.
  - `dashboard` - the main page for the app where your dashboard lives - all other pages (landing & login excepted) live beneath this. 
    - `(overview)` - enclosed in brackets to denote a group route for `/dashboard` that contains the main dashboard page.
    - `customers` - the customers table page
    - `invoices` - the page for invoices, containing routes for creating and editing invoices.
  - `lib` - Files containing utility functions, type definitions, test data, and other utls. `actions.ts` is where you'll find most of the query logic. 
  - `login` - Page logic for the login page.
  - `seed` - Route to seed the db with initial placeholder data.
  - `ui` - Contains components, styling, fonts, and primitives.
    - `customers` - Customer table component
    - `dashboard` - Dashboard components including nav-links for the sidebar.
    - `invoices` - Components for displaying the invoice table and forms for creating & editing individual invoices. The visual pagination component lives here.
- `public` - This is where static assets live to served (mostly images). Static metadata files are kept inside the `app` folder.
- `readme` - Screenshots for the readme live here.

---