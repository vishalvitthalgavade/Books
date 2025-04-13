const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide book title'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Please provide author name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide book description']
    },
    price: {
        type: Number,
        required: [true, 'Please provide book price']
    },
    category: {
        type: String,
        required: [true, 'Please provide book category'],
        enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Other']
    },
    image: {
        type: String,
        required: [true, 'Please provide book image']
    },
    stock: {
        type: Number,
        required: [true, 'Please provide stock quantity'],
        min: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    numReviews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 