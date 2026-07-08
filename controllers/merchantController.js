import express from 'express';
import * as db from '../db/queries.js';

export async function showViewMerchantsPage(req, res) {
    const merchants = await db.getAllMerchants();
    res.render('viewMerchants', {
        title: 'View Merchants',
        merchants: merchants
    });
};

export const showAddMerchantForm = (req, res) => {
    res.render('addMerchant');
};

export async function addMerchant(req, res){
    const check = await db.addMerchant(req.body);
    if(check != undefined){
        res.json({ responseMessage: check });
    }
    res.redirect('/');
};

export const deleteMerchant = (req, res) => {
    db.deleteMerchant(req.params.merchant_id);
    res.redirect('/merchants');
};

export async function showProcessingProfileForm(req, res) {
    const merchant = await db.getMerchant(req.params.merchant_id);
    const processingProfiles = await db.getProcessingProfiles(req.params.merchant_id);
    res.render('processingProfiles', {
        merchant: merchant,
        processingProfiles: processingProfiles
    });
};

export async function addProcessingProfile(req, res) {
    db.addProcessingProfile(req.params.merchant_id, req.body);
    res.redirect(`/merchants/${req.params.merchant_id}/processing-profiles`);
};

export const deleteProcessingProfile = (req, res) => {
    db.deleteProcessingProfile(req.params.merchant_id, req.body.marketType, req.body.terminalId);
    res.redirect(`/merchants/${req.params.merchant_id}/processing-profiles`);
};