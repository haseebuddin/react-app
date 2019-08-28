import React, {Component} from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';
class ProductView extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            product: []
        }
    }
    componentWillMount() {
        const {id}=this.props.match.params;
        console.log("match ",this.props.match.id);
        console.log("abc value",id);
        let response = fetch("https://greencommunitylaundry.herokuapp.com/api/products/"+id);
        response.then(function(res){
            console.log(res);
            return res.json();
        }).then((products) => {
            console.log("product ",products);
            const newProducts=products;
            // const newProducts = products.map(({id, name, image, description, price}) => { //destructuring
            //     return {id, name, image, description, price}
            // });

            this.setState({
                product: newProducts
            })
        })
    }
    renderRow() {
        // return this.state.products.map((product, i) => {
            return (
                <Col key={this.state.product.id} md={4}>
                    <div className="card">
                        <img className="card-img-top" alt="" title={this.state.product.name}
                             src={`https://greencommunitylaundry.herokuapp.com/api/images/${this.state.product.image}`}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.product.name}</h5>
                            <p className="card-text">{this.state.product.description}</p>
                            <p className="card-text">Price: {this.state.product.price}</p>
                        </div>
                    </div>
                </Col>
            )
        // })
    }
    render() {
        return (
            <Row>
                {this.renderRow()}
            </Row>
        )
    }
}
export default ProductView;