// app/api/auth/route.js
import shopify from "../../../../lib/shopify";

export async function GET(request) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  const authRoute = await shopify.auth.begin({
    shop,
    callbackPath: "/api/auth/callback",
    isOnline: false,
  });

  return Response.redirect(authRoute);
}
