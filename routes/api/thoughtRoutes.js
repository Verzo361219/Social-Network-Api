
const {
    getAllThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reation').put(addReaction)

router.route('/:thoughtId/reation/:reactionId').put(deleteReaction)


module.exports = router