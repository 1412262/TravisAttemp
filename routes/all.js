let all = require("../model/all");
let Pet = require("../model/pet");
let Tree = require("../model/tree");
/*
 * GET all route to retrieve all.
 */
let getall = (req, res) => {
	var ps;
	var ts;
    Pet.find((err, pets) => {
        if (err) {
            res.send(err); // :D
            return;
        }else{
        	ps = pets;
        	Tree.find((err,trees)=>{
        		ts = trees;
        		var all = ps.concat(ts);
        		res.send(all);
        	})
        }
        
    });
};

module.exports = {
    getall
};
