// src/utils/DataStore.js
const cache = {};

/**
 * Asynchronously fetches and caches a JSON file from the given path.
 *
 * If the data has already been fetched before, it returns the cached result,
 * avoiding duplicate network requests. Otherwise, it fetches the data,
 * parses it as JSON, caches it, and then returns it.
 *
 * @param {string} path - The path to the JSON file.
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON data.
 * @throws {Error} If the fetch request fails.
 *
 * Usage:
 *   const roles = await getJSON('./src/json/roles.json');
 */
export async function getJSON(path) {
  if (cache[path]) return cache[path];

  const response = await fetch(path, { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  const data = await response.json();

  cache[path] = data;
  return data;
}

export async function getText(path) {
  if (cache[path]) return cache[path];

  const response = await fetch(path, { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  const data = await response.text();

  cache[path] = data;
  return data;
}