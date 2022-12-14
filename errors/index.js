exports.handleCustomErrors = (err, req, res, next) => {
    if (err.status && err.message) {
        res.status(err.status).send({ message: err.message });
    }
    else (next(err));
};
exports.handlePsqlErrors = (err, req, res, next) => {
    if (err.code === '22P02') {
        res.status(400).send({ message: 'Bad Request' });
    } else if (err.code === '23503') {
        res.status(404).send({ message: 'Article not found' });
    }
    else (next(err));
};


exports.handleServerErrors = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Server Error!');
};
