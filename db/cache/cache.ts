import { unstable_cache } from "next/cache";
import { cache as reactChache } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => Promise<any>;
export function cache<T extends Callback>(
  cd: T,
  keyParts: string[],
  options: {
    revalidate?: number | false;
    tags?: string[];
  }
) {
  return unstable_cache(reactChache(cd), keyParts, options);
}
