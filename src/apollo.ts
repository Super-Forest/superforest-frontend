import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { TOKEN } from 'constant';

const token = sessionStorage.getItem(TOKEN);

export const isLoggedInVar = makeVar(!!token);
export const authToken = makeVar(token);

export const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authToken();
            }
          }
        },
      },
    },
  }),
});
