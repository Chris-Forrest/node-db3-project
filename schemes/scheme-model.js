const db = require("../data/dbConfig");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep,

};

function find(){
    return db("schemes")
};

function findById(id){
    return db("schemes")
    .where({ id })
    .first()
};

function findSteps(id){
    return db("steps")
};

function add(data){
    return db("schemes")
    .insert(data, "id")
};

function update(changes,id){
   return db("schemes")
   .where({ id })
   .update(changes)
   .first()
};

function remove(id){
    return db("schemes")
    .where({ id })
    .del()
};

function addStep(){

};