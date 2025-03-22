import { useContext, Context } from "react";
export function useSafeContext<T>(context: Context<T | undefined>, errorMessage: string): T {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error(errorMessage);
  }
  return contextValue;
}
