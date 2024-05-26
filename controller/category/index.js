const CategoryModel = require('../../model/category')
const CategorySubCategory = require('../../model/sub-category')


class Category {

    static async addCategory(req, res) {
        try {

            const { categoryName,categoryImage } = req.body;

            console.log(categoryName)

            const category = new CategoryModel({ categoryName,categoryImage })
            await category.save()

            res.send({ message: 'Category Saved Success' })


        } catch (error) {
            res.send({ error })
        }
    }

    static async getAllCategory(req, res) {
        try {
            const allCategory = await  CategoryModel.find();
            res.send(allCategory)
        } catch (error) {
            res.send(error)
        }
    }

    static async addSubCategory(req, res) {
        try {
            const { Name, parentCategory } = req.body;




            const subCategory = new CategorySubCategory({ Name, parentCategory });
            await subCategory.save()
            res.send('SAVED SUCCESS')

        } catch (error) {
            res.send(error)

        }
    }

    static async deleteCategory(req, res) {
        try {
            const categoryId = req.params.id;
            const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
            console.log(categoryId)
    
            if (!deletedCategory) {
                return res.status(404).send({ error: 'Category not found' });
            }
    
            res.redirect('/category'); // Redirect to the category page after deletion
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while deleting the category' });
        }
    }


    static async getAllSubCategory(req, res) {
        try {

            const AllCategories = await CategorySubCategory.find({});
            res.send(AllCategories)


        } catch (error) {
            res.send(error)
        }
    }
    

    static async deleteSubCategory(req, res) {
        try {
            // Extract the subcategory ID from the request parameters or body
            const { id } = req.params; // Assuming the subcategory ID is passed as a route parameter

            // Use deleteOne to delete the subcategory based on its ID
            const deletedSubCategory = await CategorySubCategory.deleteOne({ _id: id });

            // Check if the subcategory was found and deleted
            if (deletedSubCategory.deletedCount === 1) {
                // If successfully deleted, send a success response
                res.status(200).send({ message: 'Subcategory deleted successfully' });
            } else {
                // If subcategory not found, send a not found response
                res.status(404).send({ error: 'Subcategory not found' });
            }
        } catch (error) {
            // If an error occurs during the deletion process, send a 500 Internal Server Error response
            console.error("Error while deleting subcategory:", error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
    // Update controller for subcategory
    static async updateSubCategory(req, res) {
        try {
            // Extract the subcategory ID from the request parameters
            const { id } = req.params;
            // Extract the updated subcategory data from the request body
            const { Name, parentCategory } = req.body;

            console.log(req)

            // Find the subcategory by its ID
            const subCategory = await CategorySubCategory.findById(id);

            // Check if the subcategory exists
            if (!subCategory) {
                // If the subcategory doesn't exist, send a 404 Not Found response
                return res.status(404).send({ error: 'Subcategory not found' });
            }

            // Update the subcategory properties
            subCategory.Name = Name;
            subCategory.parentCategory = parentCategory;

            // Save the updated subcategory
            await subCategory.save();

            // Send a success response
            res.status(200).send({ message: 'Subcategory updated successfully' });
        } catch (error) {
            // If an error occurs during the update process, send a 500 Internal Server Error response
            console.error("Error while updating subcategory:", error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }

   



}

module.exports = Category;