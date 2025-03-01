// app/api/auth/callback/route.js
import shopify from "../../../../../lib/shopify";

export async function GET(request) {
  try {
    const session = await shopify.auth.callback({
      rawRequest: request,
      rawResponse: new Response(),
    });

    // Store the session (e.g., in a database)
    console.log("Session:", session);

    return Response.redirect("/");
  } catch (error) {
    console.error("OAuth callback error:", error);
    return new Response("Authentication failed", { status: 500 });
  }
}
