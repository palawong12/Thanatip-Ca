import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, Col, Row
    , form, FormGroup, Label, Input, Button, Form
} from 'reactstrap';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            id: 0,
            name: '',
            price: '',
            stock: '',
            description: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                this.setState({
                    products: res.data,
                    id: 0,
                    name: '',
                    price: '',
                    stock: '',
                    description: ''
                })
                console.log(res.data);
            })
    }
    namechange = event => {
        this.setState({
            name: event.target.value
        })
    }
    pricechange = event => {
        this.setState({
            price: event.target.value
        })
    }
    stockchange = event => {
        this.setState({
            stock: event.target.value
        })
    }
    descriptionchange = event => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        return (
            <div><Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(p =>
                                    <tr key={p._id}>
                                        <td> {p.name} </td>
                                        <td> {p.price} </td>
                                        <td> {p.stock} </td>
                                        <td> {p.description} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Form>
                        <FormGroup row>
                            <Label md={2}>ชื่อสินค้า</Label>
                            <Col md={10}>
                                <Input type="Text" onChange={(e) => this.namechange(e)} value={this.state.name} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2}>ราคา</Label>
                            <Col md={10}>
                                <Input type="Text" onChange={(e) => this.pricechange(e)} value={this.state.price} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2}>จำนวน</Label>
                            <Col md={10}>
                                <Input type="Text" onChange={(e) => this.stockchange(e)} value={this.state.stock} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2}>รายละเอียด</Label>
                            <Col md={10}>
                                <Input type="Textarea" onChange={(e) => this.descriptionchange(e)} value={this.state.description} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md ={{size:10,offset:2}}>
                                <Button color="success">บันทึกข้อมูล  </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            </div>
        )
    }
}