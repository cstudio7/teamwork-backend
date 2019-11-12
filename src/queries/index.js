const { createUserQuery, findUserQuery } = require('./user');
const { postGifQuery, findGifByIdQuery, deleteGifQuery } = require('./gif');
const {
 postArticleQuery, editArticleQuery, findArticleByIdQuery, deleteArticleQuery 
} = require('./article');

module.exports = {
  createUserQuery,
  findUserQuery,
  postGifQuery,
  postArticleQuery,
  editArticleQuery,
  findArticleByIdQuery,
  findGifByIdQuery,
  deleteArticleQuery,
  deleteGifQuery,
};
