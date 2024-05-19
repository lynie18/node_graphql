export const resolvers = {
    Query: {
        hello: () => 'Hello World',
    },
    Mutation: {
        add: (parent, { username }) => `User ${username} added!`,
    },
};

