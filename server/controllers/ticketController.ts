// import query from '../database/UserModel';

const ticketController = {
  // ---------------------------------- GRAB FAVORITES FUNCTION -----------------------------------------------------
  // on user login / sign up

  getTickets: async (req, res, next) => {
    const userID = res.locals.userID;
    console.log('USER ID: ', userID);

    // QUERIES
    // const getUserFavortiesQuery =
    //   'SELECT favorites.id, favorites.title, favorites.href, favorites.description FROM favorites INNER JOIN member_favorites ON favorites.id = member_favorites.favorites_id INNER JOIN member ON member.id = member_favorites.member_id WHERE member.id = $1';
    // const getUsernameQuery = 'SELECT username FROM member WHERE id=$1';

    try {
      // const usernameResponse = await query(getUsernameQuery, [userID]);
      // const favoritesResponse = await query(getUserFavortiesQuery, [userID]);
      // console.log('FAVORITES RESPONSE: ', favoritesResponse);
      // console.log('USERNAME ASSOCIATED WITH USERID: ', usernameResponse);
      // res.locals.returnObject = {
      //   userID: userID,
      //   username: usernameResponse.rows[0].username,
      //   favorites: favoritesResponse.rows,
      // };
      return next();
    } catch (error) {
      return next({
        log: `Error occured in ticketController.getTickets, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured when fetching tickets', // message to the user
        },
      });
    }
  },

  // ---------------------------------- ADD FAVORITE FUNCTION -----------------------------------------------------
  //
  addTicket: async (req, res, next) => {
    // const { memberID, title, href, description } = req.body;
    // // QUERIES
    // const insertFavoriteQuery =
    //   'INSERT INTO favorites (title, href, description) VALUES ($1, $2, $3) RETURNING id';
    // const insertMIDnFIDJTQuery =
    //   'INSERT INTO member_favorites (member_id, favorites_id) VALUES ($1, $2)';
    try {
      //   const insertFavoriteResponse = await query(insertFavoriteQuery, [
      //     title,
      //     href,
      //     description,
      //   ]);
      //   await query(insertMIDnFIDJTQuery, [
      //     memberID,
      //     insertFavoriteResponse.rows[0].id,
      //   ]);
      //   // console.log('RESPONSE FROM ADD FAV: ',insertFavoriteResponse)
      //   res.locals.userID = memberID;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in ticketController.addTicket, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured when adding the ticket', // message to the user
        },
      });
    }
  },
};

export default ticketController;
