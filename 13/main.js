let timer = function (length) {
    return new Promise(function (resolve, reject) {
        console.log('Init Promise');

        setTimeout(function () {
            console.log('Timeout done.');

            resolve();
        }, length);
    });
};

timer(4000).then(() => console.log('All done!'));
