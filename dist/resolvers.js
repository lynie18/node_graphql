export const resolvers = {
    Query: {
        hello: () => 'Hello World',
    },
    Mutation: {
        greet: (parent, { name }) => `Hello, ${name}!`,
    },
};
export default resolvers;
