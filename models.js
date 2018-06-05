'use strict';

const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String},
    author: 
    {firstName: String,
    lastName: String},
    created: {type: Date, default: Date.now}
    
});

blogSchema.virtual('authorName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogSchema.methods.serialize = function() {
    return {
        id: this._id,
        title: this.title,
        content: this.content,
        author: this.authorName,
        created: this.created
    };
};

const Post = mongoose.model('Post', blogSchema);

module.exports = {Post};