import React, { Component } from "react";
import './Kipasangin.css';
import Post from "../../component/Kipasangin/Post";

class Kipasangin extends Component {
    state = {
        listKipasangin: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/Kipasangin')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listSKipasangin: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetKipasangin = data => {
        fetch(`http://localhost:3001/Kipasangin/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataKipasangin = { ...this.state.insertKeranjang };
                dataKipasangin["id"] = res["id"];
                dataKipasangin["nama"] = res["nama"];
                dataKipasangin["harga"] = res["harga"];
                dataKipasangin["stok"] = res["stok"];
                dataKipasangin["qty"] = 1;
                this.setState({
                    insertKeranjang: dataKipasangin
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-kipasangin">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listKipasangin.map(Kipasangin => {
                            return (
                                <Post
                                    key={Kipasangin.id}
                                    id={Kipasangin.id}
                                    nama={Kipasangin.nama}
                                    harga={Kipasangin.harga}
                                    gambar={Kipasangin.gambar}
                                    stok={Kipasangin.stok}
                                    tambahKipasangin={this.handleGetKipasangin} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Kipasangin;