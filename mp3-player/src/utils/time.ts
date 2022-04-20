const timeStringify = (second: number): string => {
  const s = Math.ceil(second);
  const m = Math.floor(second / 60);
  return `${String(m).padStart(2, '0')}:${String(s - m * 60).padStart(2, '0')}`;
};

export { timeStringify };
