const app = require('./app.js')


const main = () => {
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log("Servidor escuchando en puerto: " + PORT);
    });
};

main()