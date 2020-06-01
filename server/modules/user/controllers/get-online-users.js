const _ = require('lodash');
const HTTPStatus = require('http-status');

const User = require('@User/model');
const AccessToken = require('@AccessToken/model');
const APIError = require('@api-error');
const logger = require('@winston')

async function getOnlineUsers(req, res, next) {
  if (!req.isAuthenticated) {
    const err = new APIError('Unauthenticated', HTTPStatus.UNAUTHORIZED, true);
    return next(err);
  }

  let accessTokenId = req.accessToken.obj.dataValues.id

  try {
    let filter = {
      where: {
        id: { $notIn: [accessTokenId] }
      },
      include: [{
        model: User, as: 'user'
      }]
    }

    let accessTokens = await AccessToken.findAll(filter)

    return res.json({
      users: accessTokens.map(({ user }) => user)
    })

  } catch (err) {
    logger.error('ERROR > FETCHING SIGNED IN USERS > ', err);
    return next(err);
  }
}

module.exports = getOnlineUsers;