const Template = require('../model/user')


module.exports = {
    createTemplate: async (req,res) => {
        try{


            const newTemplate = new Template(req.body);
            console.log(newTemplate);
            newTemplate.save();

            // res.send(req.body)

            console.log('test')
            // res.status(200).send('Template created');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getTemplates: async (req,res) => {
        try{
            const templates = await Template.find({})

            res.send(templates)
        }
        catch(error){
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}