 optimisations

Added Context API to avoid prop drilling

The useMemo hook is used to memoize the context value object and prevent it from being recreated unnecessarily on every render. The dependencies array passed to useMemo ensures that the object is only recreated when the values of organizationConfig, isDirty, isValid, or touched change.

Additionally, the useState hook is used to initialize state for organizationConfig, isDirty, isValid, and touched. The useEffect hook is used to update the isDirty state whenever the touched state changes.

