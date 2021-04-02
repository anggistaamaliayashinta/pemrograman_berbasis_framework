import React from "react";

const PostKeranjang = (brg) => {
    return (
                <tr>
                    <td align="center">{brg.no}</td>
                    <td align="center">{brg.id}</td>
                    <td>{brg.nama}</td>
                    <td align="center">{brg.harga}</td>
                    <td align="center">{brg.qty}</td>
                    <td align="center">{brg.harga * brg.qty}</td>
                </tr>
    )
}

export default PostKeranjang;