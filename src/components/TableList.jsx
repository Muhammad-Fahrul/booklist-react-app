import "./tableList.css";
export default function (props) {
  return (
    <div className="container-list-book">
      <table id="book-container">
        <thead>
          <tr>
            <th>judul buku</th>
            <th>penulis</th>
            <th>isbn</th>
          </tr>
        </thead>
        <tbody>
          {props.formData.map((book, i) => {
            return (
              <tr key={i}>
                <td>{book.judul}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
