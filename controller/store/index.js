const Store = require('../../model/store-detail')

class StoreController { 


    static async createStore(req, res){
        try {
            const store = await Store.create(req.body);
            res.status(201).json({ status: 'success', data: store });
        } catch (err) {
            res.status(400).json({ status: 'fail', message: err.message });
        }
    }

    static async getStore(req, res){
        try {
            const store = await Store.findById(req.params.id);
            res.status(200).json({ status: 'success', data: store });
        } catch (err) {
            res.status(404).json({ status: 'fail', message: 'Store not found' });
        }
    }

    static async updateStore(req,res){
        try {
            const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
            res.status(200).json({ status: 'success', data: store });
        } catch (err) {
            res.status(400).json({ status: 'fail', message: err.message });
        }
    }

    static async deleteStore(req,res){
        try {
            await Store.findByIdAndDelete(req.params.id);
            res.status(204).json({ status: 'success', data: null });
        } catch (err) {
            res.status(400).json({ status: 'fail', message: err.message });
        }
    }


}

module.exports = StoreController