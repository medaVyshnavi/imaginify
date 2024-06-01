## Getting Started

First, run the development server: npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## STEPS

1. create a new project on next JS latest
2. run command for shadcn : npx shadcn-ui@latest init (shadcn is a component library)


# important points to remember

-app
  -(auth)
    -layout.ts -> layout only for auth page
  -(root) 
    -layout.ts -> common layout for the entire application

## clerk authentication
wrap the clerkProvider in the layout.tsx and using the clerk middleware we can decide which pages should be public and which should require authentication to access.
