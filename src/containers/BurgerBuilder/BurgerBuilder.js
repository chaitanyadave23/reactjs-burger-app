import { Component } from "react";
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />    
                <BuildControls />            
            </Aux>
        );
    }
}

export default BurgerBuilder;
