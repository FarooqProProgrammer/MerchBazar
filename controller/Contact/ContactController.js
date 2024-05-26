const contactModel = require("../../model/contact")







class ContactController {


  

  static ContactForm = async (req, res) => {
    console.log(req.body);
    try {
        const newContact = new contactModel({
            fullname: req.body.fullname,
            Email: req.body.Email,
            PhoneNo: req.body.PhoneNo,
            Message: req.body.Message
        });

        const savedContact = await newContact.save();

        // Set flash message
        req.flash('success', 'Contact saved successfully!');

        // Redirect back to the frontend contact page
        res.redirect('/contact');
    } catch (error) {
        // Set flash message for error
        req.flash('error', error.message);

        // Redirect back to the frontend contact page
        res.redirect('/contact');
    }
};


  static getContactInfo = async (req, res) => {
    try {

      const contactinfo = await contactModel.find();
      res.send(contactinfo)

    } catch (error) {
      res.send(error)
    }
  }

}




module.exports = ContactController