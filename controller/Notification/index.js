const { io } = require('../..');
const NotificationModel = require('../../model/Site/Notification');


class Notification {
    static async sendNotification(message, recipient){
        try {
            const newNotification = new NotificationModel({
              message,
              recipient,
            });
            await newNotification.save();
        
        ;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to send notification');
          }
    }

    static async getNotifications(recipient){
        try {
            const notifications = await NotificationModel.find({ recipient });
            return notifications;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to get notifications');
          }
    }
}
module.exports = Notification