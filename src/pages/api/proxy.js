import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request, url }) => {
  const targetUrl = url.searchParams.get('url');
  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const contentType = response.headers.get('content-type') || 'text/html';
    const body = await response.text();

    // Return the fetched content with relaxed headers to allow embedding
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': contentType,
        'X-Frame-Options': 'ALLOWALL',
        'Content-Security-Policy': "frame-ancestors *",
      },
    });
  } catch (error) {
    return new Response('Failed to fetch target URL', { status: 500 });
  }
};
