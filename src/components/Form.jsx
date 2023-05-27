import "./form.css";
export default function (props) {
  return (
    <form onSubmit={props.addDataForm} autoComplete="off">
      <label htmlFor="judul">Judul Buku</label>
      <input
        type="text"
        name="judul"
        onChange={props.handleChange}
        value={props.formData.judul}
        required
      />
      <label htmlFor="author">Penulis Buku</label>
      <input
        type="text"
        name="author"
        onChange={props.handleChange}
        value={props.formData.author}
        required
      />
      <label htmlFor="isbn">ISBN</label>
      <input
        type="text"
        name="isbn"
        onChange={props.handleChange}
        value={props.formData.isbn}
        required
      />
      <button>Tambahkan</button>
    </form>
  );
}
