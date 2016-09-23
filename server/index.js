var path = require('path'),
    express = require('express'),
    env = process.env.AMBIENTE || 'desenvolvimento',
    helmet = require('helmet'),
    compression = require('compression'),
    cluster = require('cluster'),
    app = express();

app.use(helmet.hidePoweredBy({
    setTo: 'USI 0.1.0'
}));

//compressão do response, performance
app.use(compression());

app.use(express.static(path.join(__dirname, '/../public'), {
    maxAge: 1000 * 30 * 60
}));


//Definição do cluster
if (cluster.isMaster) {

    // Count the machine's CPUs
    var workers = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < workers; i += 1) {
        cluster.fork();
    }

    // Code to run if we're in a worker process
} else {

    // Add a basic route – index page

    // Bind to a port
    var server = app.listen(3003, function() {

        var host = server.address().address;
        var port = server.address().port;

        console.log('Servidor escutando na porta %s', port);
        console.log('Ambiente de %s', env);

    });
}

//usado para testes
module.exports = app;
