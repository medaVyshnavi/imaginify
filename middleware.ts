// import { clerkMiddleware } from "@clerk/nextjs/server";

// // Make sure that the `/api/webhooks/(.*)` route is not protected here
// export default clerkMiddleware({
//    publicRoutes: ['/', '/api/webhooks/clerk']
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
