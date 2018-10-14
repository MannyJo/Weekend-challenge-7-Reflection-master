const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in /feedback GET');

    pool.query(`
        SELECT
            "id",
            "feeling",
            "understanding",
            "support",
            "comments",
            "flagged",
            "date"
        FROM
            "feedback"
        ORDER BY
            "date" DESC
        ;
    `).then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log('Error with getting feedback :', error);
        res.sendStatus(500);
    });
});

// store the feedback from the client
router.post('/', (req, res) => {
    console.log('in /feedback POST');

    pool.query(`
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        ;   
    `, [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comment
    ]).then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error with storing feedback :', error);
        res.sendStatus(500);
    });
});

// delete feedback by id
router.delete('/delete/:id', (req, res) => {
    console.log('in /feedback/delete DELETE');

    pool.query(`
        DELETE FROM "feedback"
        WHERE "id" = $1
        ;
    `, [ req.params.id ]).then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error with deleting feedback :', error);
        res.sendStatus(500);
    });
});

// update flagged by id
router.put('/update', (req, res) => {
    console.log('in /feedback/update PUT');

    pool.query(`
        UPDATE "feedback"
        SET "flagged" = $1
        WHERE "id" = $2
        ;
    `, [ req.body.flagged, req.body.id ]).then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error with updating feedback :', error);
        res.sendStatus(500);
    })
});

module.exports = router;