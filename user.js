const connection = require('./database');

module.exports = {
    async create(request, response) {
        const { localization } = request.body;

        const usuario = await connection('usuarios')
            .where('localization', localization)
            .select('name')
            .first();

        if (!usuario) {
            return response.status(400).json({ error: 'No User found with this localization'});
        }

        return response.json(usuario);
    }
}