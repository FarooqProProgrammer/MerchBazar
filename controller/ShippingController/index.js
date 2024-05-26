const shipModel = require('../../model/shipping-address')

class ShippingController { 

  static async addOrUpdateShippingInfo(req, res) {
    try {
        // Get userId from cookies
        const userId = req.cookies.user._id;

        // Check if userId exists
        if (!userId) {
            return res.status(400).send({ message: 'User ID not found in cookies' });
        }

        // Find user's shipping address
        let userShippingInfo = await shipModel.findOne({ userId });

        if (!userShippingInfo) {
            // If shipping info doesn't exist, create a new one
            userShippingInfo = new shipModel({
                userId,
                ...req.body // Add other fields from request body
            });
        } else {
            // If shipping info exists, update it
            userShippingInfo = await shipModel.findOneAndUpdate(
                { userId },
                req.body,
                { new: true }
            );
        }

        // Save the updated/created shipping info
        await userShippingInfo.save();

        res.status(200).send(userShippingInfo);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

static async getShippingAddress(req,res) { 
    try {
        const Ship = await shipModel.find();
        res.send(Ship)
     }catch(error) {
        res.send(error)
      }
}



}

module.exports = ShippingController;