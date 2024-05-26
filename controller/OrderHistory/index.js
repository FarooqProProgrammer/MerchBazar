const Order = require('../../model/order-history');

class OrderController {
    static async createOrder(req, res) {
        try {
            const order = new Order(req.body);
            await order.save();
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAllOrder(req, res) {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getOrderById(req, res) {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateOrder(req, res) {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            Object.assign(order, req.body);
            await order.save();
            res.json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async deleteOrder(req, res) { 
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.remove();
            res.json({ message: 'Order deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}


module.exports = OrderController