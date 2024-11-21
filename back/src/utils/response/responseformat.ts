const succesBody = <T>(message: string, data?: T, rests?: unknown) => {
  const rest = typeof rests === "object" ? { ...rests } : rests;
  return { message, data, ...rest };
};

const errorBody = <T>(message: string, error?: T, rests?: unknown) => {
  const rest = typeof rests === "object" ? { ...rests } : rests;
  return { message, error, rest };
};

export { succesBody, errorBody };
