import express from 'express';
import * as db from '../db/queries.js';

export async function showHomePage(req, res){
    res.render('index');
};