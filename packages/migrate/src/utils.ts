import { globby } from "globby";
import { join } from "path";

export async function findTypeSpecFiles(root: string, ignore: string[] = []) {
  return findFiles([normalizePath(join(root, "**/*.tsp"))], ignore);
}

export async function findFiles(include: string[], ignore: string[] = []): Promise<string[]> {
  const patterns = [...include, "!**/node_modules", ...ignore.map((x) => `!${x}`)];
  return globby(patterns);
}

export function normalizePath(path: string): string {
  return path.replace(/\\/g, "/");
}
