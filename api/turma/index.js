const turmaSchema = require('./schema/turma/graphql');
const turmaResolvers = require('./resolvers/turmaResolvers');
const TurmasApi = require('./datasource/turma');

module.exports = {
  turmaSchema,
  turmaResolvers,
  TurmasApi,
};
