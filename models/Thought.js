const { type } = require('express/lib/response');
const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        maxlength: 300,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const thoughtSchema = new Schema({
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    thoughtText: {
        type: String,
        required: true,
        maxlength: 300,
        minlength: 1,
        default: 'No Thought Here'
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
});

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;