const StoreInfo = require('../../model/storeInfo');



class StoreDetail {

    static async createStore(req, res) {
        try {
            const {
                userid,
                storeName,
                BriefBio,
                Location,
                displayPrefence,
                SalesNotification,
                products,
                yourWebsiteLink,
                DeviantArt,
                Facebook,
                Instagram,
                TikTok,
                Tumblr,
                Twitter,
                YouTube,
                Pinterest,
            } = req.body;


            console.log(req.body)

            let storeInfo;

            // Check if the document with the given userid exists
            if (userid) {
                storeInfo = await StoreInfo.findOne({ userid });

                if (!storeInfo) {
                    // If document with userid doesn't exist, create a new one
                    storeInfo = new StoreInfo(req.body);
                } else {
                    // If document with userid exists, update it
                    storeInfo.set({
                        storeName,
                        BriefBio,
                        Location,
                        displayPrefence,
                        yourWebsiteLink,
                        DeviantArt,
                        Facebook,
                        Instagram,
                        TikTok,
                        Tumblr,
                        Twitter,
                        YouTube,
                        Pinterest,
                        products,
                    });
                }
            } else {
                // If no userid provided, create a new document
                storeInfo = new StoreInfo({
                    storeName,
                    BriefBio,
                    Location,
                    displayPrefence,
                    SalesNotification,
                    yourWebsiteLink,
                    DeviantArt,
                    Facebook,
                    Instagram,
                    TikTok,
                    Tumblr,
                    Twitter,
                    YouTube,
                    Pinterest,
                    products,
                });
            }

            // Save the document
            await storeInfo.save();
            res.status(200).send(storeInfo);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }


}


module.exports = StoreDetail