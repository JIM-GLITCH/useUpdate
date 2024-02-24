import { useCallback, useState } from "react";

export function useUpdate() {
  const [, setState] = useState({});
  const updater = useCallback(() => setState({}), []);
  return updater;
}
