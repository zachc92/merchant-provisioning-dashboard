import express from 'express';
import * as db from '../db/queries.js';

export async function showHomePage(req, res){
    const merchants = await db.getAllMerchants();
    console.log(merchants);
    res.render('index');
};