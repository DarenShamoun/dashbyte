module.exports = (app, db) => {
    app.get('/api/parts/:part', async (req, res) => {
      try {
        const collection = db.collection(`${req.params.part.toUpperCase()}_UserBenchmarks`);
        const parts = await collection.find().toArray();
        res.json(parts);
      } catch (err) {
        console.error('An error occurred while fetching parts:', err);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
      }
    });
  };
  