import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"
const supabaseUrl = 'https://klbbvfmpcwyetsswlgcj.supabase.co/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYmJ2Zm1wY3d5ZXRzc3dsZ2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Mjg0MjAsImV4cCI6MjA1NzIwNDQyMH0.jiIIgMJcLyTzaKlh7BmChgJvbTyEk1Q0HxCjFNN3HOU'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
  let { data: books, error } = await supabase
     .from('books')
     .select('*')

  for (let book of books){
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.Title} - ${book.Author} - ${book.ISBN}</li>`
   }
}
getBooks();