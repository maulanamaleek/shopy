import React, { Component } from "react";
import Product from "./Product";
import jaket from "./assets/jaket.jpg";
import sendal from "./assets/sendal.jpg";
import Buku from "./assets/Buku.jpg";
import Pensil from "./assets/Pensil.jpg";
import styled from "styled-components";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    alert(`You buy ${e.target.value}`);
  }

  onChange(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const filter = this.state.filter;
    return (
      <div>
        <h1 className="item">Products</h1>
        <div className="filter">
          <p>Filter</p>
          <select value={filter} onChange={this.onChange}>
            <option value="all">All</option>
            <option value="pakaian">Pakaian</option>
            <option value="tulis">Tulis</option>
            <option value="olahraga">Olahraga</option>
          </select>
        </div>

        <div className="product-layout">
          <Product
            name="Jaket"
            category="pakaian"
            submit={this.onSubmit}
            image={jaket}
            price="99rb"
          />
          <Product
            name="Sendal"
            submit={this.onSubmit}
            image={sendal}
            price="29rb"
          />
          <Product
            name="Buku"
            submit={this.onSubmit}
            image={Buku}
            price="49rb"
          />
          <Product
            name="Pensil"
            className="tulis"
            submit={this.onSubmit}
            image={Pensil}
            price="9rb"
          />
        </div>
      </div>
    );
  }
}
