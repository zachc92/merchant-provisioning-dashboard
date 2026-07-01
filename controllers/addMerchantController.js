import express from 'express';
import * as db from '../db/queries.js';

export const showAddMerchantForm = (req, res) => {
    res.render('addMerchant');
};

export const addMerchant = (req, res) => {
    db.addMerchant(req.body);
    res.redirect('/');
}