import { useState } from "react";
function HAHAHA() {
  let book = [
    {
      author: "문정우",
      title: "나는 문어",
    },
  ];
  let [Book, setBook] = useState(book);
  let [author, setAuthor] = useState();
  let [title, setTitle] = useState();

  return (
    <>
      <div>
        <title>작성자:</title>
        <input
          type="text"
          placeholder="작가"
          value={author}
          onChange={(e) => {
            console.log(e.target.value);
            setAuthor(e.target.value);
          }}
        ></input>
        <title>제목:</title>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let newBook = book.concat({
              author: author,
              title: title,
            });
            console.log(newBook);
            setBook(newBook);
            setAuthor("");
            setTitle("");
          }}
        >
          작성
        </button>
      </div>
      <div>
        <select>
          <option>작성자</option>
          <option>제목</option>
          <option>작성자</option>
        </select>
        <button>검색</button>
      </div>
      {Book.map((vall) => {
        return (
          <div>
            <h1>
              {vall.author}, {vall.title}
            </h1>
          </div>
        );
      })}
    </>
  );
}
export default HAHAHA;
