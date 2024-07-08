const load = async ({ locals: { session }, cookies }) => {
  return {
    session,
    cookies: cookies.getAll()
  };
};
export {
  load
};
