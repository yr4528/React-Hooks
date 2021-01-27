export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload");
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
