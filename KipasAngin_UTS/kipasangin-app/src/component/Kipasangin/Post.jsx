import React from "react";

const Post = (brg) => {
  return (
    <div className="Kipasangin">
      <table classname="table-Kipasangin">
        <tr>
          <td rowspan="4">
            <div className="gambar-Kipasangin">
              <img src={brg.gambar} width="150" height="150" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>ID</td>
          <td>:</td>
          <td width="200px">{brg.id}</td>
          <td>Stok</td>
          <td>:</td>
          <td>{brg.stok}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>{brg.nama}</td>
          <td colspan="3" rowspan="2">
            <button
              className="btn btn-sm btn-warning"
              onClick={brg.tambahKipasangin.bind(this, brg.id)}
            >
              Beli
            </button>
          </td>
        </tr>
        <tr>
          <td>Harga</td>
          <td>:</td>
          <td>{brg.harga}</td>
        </tr>
      </table>
    </div>
  );
};

export default Post;