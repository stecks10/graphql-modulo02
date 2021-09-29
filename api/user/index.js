const userSchema = require('./schema/user/graphql');
const userResolvers = require('./resolvers/userResolvers');
const UsersApi = require('./datasource/user');

module.exports = {
  userSchema,
  userResolvers,
  UsersApi,
};
