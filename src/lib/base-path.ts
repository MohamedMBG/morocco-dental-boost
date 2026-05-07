const rawBaseUrl = import.meta.env.BASE_URL || "/";

export const appBaseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl : `${rawBaseUrl}/`;

export const appBasename = appBaseUrl === "/" ? "/" : appBaseUrl.replace(/\/$/, "");

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return appBasename === "/" ? normalizedPath : `${appBasename}${normalizedPath}`;
};
