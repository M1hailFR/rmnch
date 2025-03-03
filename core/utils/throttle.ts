export default function (fn: Function, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function perform(...args: unknown[]) {
    if (timer) return;

    timer = setTimeout(() => {
      fn(...args);

      if (timer) {
        clearTimeout(timer);
      }
      timer = null;
    }, timeout);
  };
}
