// Libraries
import express from "express";

// Database Modal
import { AssociateleadsModel } from "../../database/associateleads";
import {ValidateMemberName} from "../../validation/member";

const Router = express.Router();

/*
Route           /associatelead?name=
Des             Get all the member details based on the name
Params          none
Access          Public
Method          GET
*/
Router.get("/", async (req, res) => {
    try {
        await ValidateMemberName(req.query);
        const { name } = req.query;
        const member = await AssociateleadsModel.find({ name });

        return res.json({ member });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /associatelead/:_id
Des             Get individual member details based on id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        
        const { _id } = req.params;

        const member = await AssociateleadsModel.findById(_id);

        if (!member) {
            return res.status(404).json({ error: "member Not Found" });
        }

        return res.json({ member });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;