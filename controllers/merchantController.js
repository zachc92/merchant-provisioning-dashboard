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

export const addMerchant = (req, res) => {
    db.addMerchant(req.body);
    res.redirect('/');
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