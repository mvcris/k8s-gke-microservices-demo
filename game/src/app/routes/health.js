const router = require('express').Router()

router.get('/health', (req, res) => {
  return res.json({ STATUS: 'UP' })
})

module.exports = router
