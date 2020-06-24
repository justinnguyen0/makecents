var express = require('express');
var router = express.Router();

var firebase = require('../firebase');
var db = firebase.database();

// helper function to receive the data of the user
async function getUserData(uid) {
    var snapshot = await db.ref(`/users/${uid}`).once('value');
    
    return snapshot.val();
}

/*  USER DATA RELATED  */
router.get('/:uid', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        res.json({
            success: true,
            user: userData
        });
    }
});

router.post('/:uid/add_bank', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    // receive post data
    var token = req.body.token;
    var name = req.body.name; // bank name
    var id = req.body.id; // account id

    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        try {
            await db.ref(`/users/${uid}`).update({
                bank: {
                    token: token,
                    name: name,
                    id: id
                }
            });
    
            res.json({
                success: true
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }
    }
});

router.post('/:uid/remove_bank', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        try {
            await db.ref(`/users/${uid}`).update({
                bank: {
                    token: null,
                    name: null,
                    id: null
                }
            });
    
            res.json({
                success: true
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }
    }
});

/*  TRANSACTIONS  */
router.get('/:uid/transactions', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);
    
    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        res.json({
            success: true,
            transactions: userData.transactions || {}
        });
    }
});

router.post('/:uid/transactions/:tid/add', async (req, res) => {
    var uid = req.params.uid;
    var tid = req.params.tid; // transaction id

    // receive post data
    var org = req.body.organization;
    var date = req.body.date;
    var amount = req.body.amount;
    var donation = req.body.donation;

    var userData = await getUserData(uid);
    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        var totalDonation = (userData['total_donation'] || 0) + donation;
        var bank = userData.bank || {};

        transactions[tid] = {
            organization: org,
            date: date,
            amount: amount,
            donation: donation
        };

        try {
            await db.ref(`/users/${uid}`).update({
                transactions: transactions,
                total_donation: totalDonation
            });
    
            res.json({
                success: true,
                transactions: transactions
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }
    }
});

module.exports = router;