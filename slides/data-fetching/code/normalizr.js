import { normalize, Schema, arrayOf } from 'normalizr';

const book = new Schema('books');
const user = new Schema('users');

book.define({ author: user });

// Then in your action creator you can normalize
normalize(response, {
  books: arrayOf(book)
});
