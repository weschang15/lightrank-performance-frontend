export default {
  Mutation: {
    updateAuth: (root, { isAuth, userId }, { cache }) => {
      const data = {
        auth: {
          isAuth,
          user: userId,
          __typename: "Auth"
        }
      };

      cache.writeData({ data });
      return null;
    }
  }
};
