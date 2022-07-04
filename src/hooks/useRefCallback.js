import { useCallback, useState } from "react";

export const useRefCallback = () => {
  const [ref, setReference] = useState();
  const setRef = useCallback(node => setReference(node), []);

  return [setRef, ref];
};
