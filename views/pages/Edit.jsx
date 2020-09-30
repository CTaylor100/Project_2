const React = require('react');  
const Layout = require('../components/Layout');      

class Edit extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div className='vert'>                       
                    <h1 className ='entire'>EDIT RECIPE</h1> 
                    <div className='across'>
                        <form action={`/recipes/${this.props.recipe._id}?_method=PUT`} method='POST'>
                            <div className = 'entire longInput'><p>Recipe Name: </p><input type='text' name='name' defaultValue={this.props.recipe.name}/></div>
                            <div className = 'entire longInput'><p>Image Links: </p><input type='text' name='images[]' defaultValue={this.props.recipe.images[0]}/></div>
                            <div className='across'>
                                <div className='addIng longInput'>
                                    <p>Ingredients: </p>
                                    <input type='text' name='ingredients[]' defaultValue={this.props.recipe.ingredients[0]}/><br/>
                                    <input type='text' name='ingredients[]' defaultValue={this.props.recipe.ingredients[1]}/><br/>
                                    <input type='text' name='ingredients[]' defaultValue={this.props.recipe.ingredients[2]}/><br/>
                                    <input type='text' name='ingredients[]' defaultValue={this.props.recipe.ingredients[3]}/><br/>
                                    <input type='text' name='ingredients[]' defaultValue={this.props.recipe.ingredients[4]}/><br/>
                                </div>
                                <div className='addDirect longInput'>
                                    <p>Directions: </p>
                                    <input type='text' name='directions[]' defaultValue={this.props.recipe.directions[0]}/><br/>
                                    <input type='text' name='directions[]' defaultValue={this.props.recipe.directions[1]}/><br/>
                                    <input type='text' name='directions[]' defaultValue={this.props.recipe.directions[2]}/><br/>
                                    <input type='text' name='directions[]' defaultValue={this.props.recipe.directions[3]}/><br/>
                                    <input type='text' name='directions[]' defaultValue={this.props.recipe.directions[4]}/><br/>
                                </div>
                            </div>
                            <input className='formSubmit blackButton' type='submit' value='Submit Changes' />
                        </form>
                    </div>
                </div>
            </Layout>  
        );
    };
};

module.exports = Edit;  