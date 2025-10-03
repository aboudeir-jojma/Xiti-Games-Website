export async function get({ url }) {
  const targetUrl = url.searchParams.get('url');
  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const contentType = response.headers.get('content-type') || 'text/html';
    const body = await response.text();

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
}

export const prerender = false;
