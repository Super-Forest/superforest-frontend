module.exports = {
    include: ['./src/**/*.{tsx.ts}'], //이 경로에 작성된 모든 query를 찾는다는것
    tagName: 'gql', //query에 사용한 tag를 지정
    client: {
      service: {
        name: 'forest-backend',
        url: 'http://localhost:3030/graphql',
      },
    }
};