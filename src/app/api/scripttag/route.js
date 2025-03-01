// app/api/scripttag/route.js
import shopify from "../../../../lib/shopify";

export async function POST(request) {
  const session = await shopify.session.getCurrent({
    rawRequest: request,
    rawResponse: new Response(),
  });

  const scriptTag = new shopify.rest.ScriptTag({ session });
  scriptTag.event = "onload";
  scriptTag.src = `${process.env.SHOPIFY_APP_URL}/survey-form.js`;

  await scriptTag.save({
    update: true,
  });

  return new Response(JSON.stringify({ message: "ScriptTag created" }), {
    status: 200,
  });
}
