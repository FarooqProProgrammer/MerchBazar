var jwt =  require('jsonwebtoken')
var StoreInfo = require('../../model/storeInfo')

class AuthMiddleware { 

    static async hasAccess(accessLevels) {
        return function(req, res, next) {
            if (req.session.user && req.session.user.hasAccess(accessLevel)) {
              return next()
            }
            return res.json({
              success: false,
              error: 'Unauthorized'
            })
          }
    }


    static async isAuthenticated(req, res, next) {
        const token = req.cookies.token;
        if (!token) {
       
            req.session.returnTo = req.originalUrl;
            return res.redirect('/login');
        }
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
            
                req.session.returnTo = req.originalUrl;
                return res.redirect('/login');
            }
            next();
        });
    }
    
    static async userHasStore(req,res) {
        const userCookie = req.cookies.user._id;
    
    
        if (!userCookie) {
            return res.redirect('/login');
        }
    
        // Slice the user cookie and parse it to get the user ID
        const userId = userCookie._id;
    
        try {
            // Check if a store exists for the user
            const store = await StoreInfo.findOne({ userid: userCookie });
            
            if (!store) {
                // If no store found, redirect the user to create a store
                return res.redirect('/store-detail');
            }
    
            // If store found, redirect to upload page
            return res.redirect('/upload');
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
}
module.exports = AuthMiddleware;