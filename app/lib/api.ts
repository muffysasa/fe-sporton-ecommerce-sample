export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is undefined. Check Vercel env & redeploy."
    );
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {}
    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;

  const ROOT = process.env.NEXT_PUBLIC_API_ROOT;

  if (!ROOT) {
    throw new Error(
      "NEXT_PUBLIC_API_ROOT is undefined. Check Vercel env & redeploy."
    );
  }

  return `${ROOT}/${path}`;
}
