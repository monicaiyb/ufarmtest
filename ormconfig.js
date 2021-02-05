module.exports = {
  'type': 'postgres',
  'url': process.env.DB_URL,
  'port':process.env.PORT,
  'entities': [process.env.ENTITY_PATH],
  'synchronize': true
}