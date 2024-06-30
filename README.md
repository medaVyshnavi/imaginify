## Getting Started

First, install the dependencies: npm install
Next, run the development server: npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## STEPS

1. create a new project on next JS latest
2. run command for shadcn : npx shadcn-ui@latest init (shadcn is a component library)
3. Integration with clerk to authenticate and also custom style the components and set the .env variables (more in clerk documentation, https://clerk.com/docs/quickstarts/nextjs)
4. sidebar (aside - html element, usePathname - to get the route from /navigation) render the navlinks

# important points to remember

-app
-(auth)
-layout.ts -> layout only for auth page
-(root)
-layout.ts -> common layout for the entire application

## clerk authentication

wrap the clerkProvider in the layout.tsx and using the clerk middleware we can decide which pages should be public and which should require authentication to access.

## shadcn

when we setup shadcn we dont automatically install everything, only the components we need we can install and use.

## Nextjs

serverless is more scalable.

## mongoose

first check if there is any connection , if yes return the same connection , if not create a new connection and return it. Because of the nature of serverless architecture in nextjs, new connection instance is created on each request. in order to optimise this process caching can be used.
[serverless is more scable]

## webhooks
webhooks are a event driven mode of communication between applications.
server calling another server in a secure manner, an function is triggered automatically when somethings happens. 
best examples would be payment gateways. I integrate stripe and connect it to my application and as soon as the payment is done, i trigger sending an email to the user.

1. in this case, clerk will trigger an event when an user signs up with a new clerk account.
2. then it will make a request with the payload containing all the information ie clerk data
3. then that data is sent to the endpoint as a http POST request and we can add the data to the database.

The recommended way to sync data between Clerk and our application is to use webhooks.
clerk's webhooks will ping our application upon specific events.

## Steps to integrate webhooks
1. deploy the application on vercel or github.
2. go to clerk's dashboard and navigate to webhooks. in endpoints tab add endpoints. 
3. add the deployed application's URL in the endpoint url and subscribe to related events (user checkbox in this case )
4. click on create and copy the signing secret and it to the env file
5. install svix to verify the webhook signature. mainly to authenticate the webhooks
6. create an endpoint is the application