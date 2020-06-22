const knex = require("../database")

module.exports = {
    async index(req, res){
        const results = await knex('employee')
        
        return res.json(results)
    }, 
    async create(req, res, next){

        try{
            const {emp_id,first_name, last_name, birth_day, sex, salary, super_id, branch_id} = req.query;
            await knex('employee').insert({
                emp_id,
                first_name, 
                last_name, 
                birth_day, 
                sex, 
                salary, 
                super_id, 
                branch_id
            })
            return res.status(201).json({first_name})
        }catch(error){
            next(error)
        }      
       
    }
}