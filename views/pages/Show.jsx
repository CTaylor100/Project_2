const React = require('react');  
const Layout = require('../components/Layout');      

class Show extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div className='vert'>                       
                    <h1 className ='entire'>{this.props.recipe.name}</h1> 
                    <div className='across'>
                        <div className='card'>
                            <img src={`${this.props.recipe.images[0]}`} />
                        </div>
                        <div className='card ingredients'> 
                            <h3>INGREDIENTS</h3>
                            <ul> 
                                {this.props.recipe.ingredients.map((ingredient, i) => {
                                    return (
                                        <li>{ingredient}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='entire card directions'>
                        <h3>DIRECTIONS</h3>
                        <ol> 
                            {this.props.recipe.directions.map((direction, i) => {
                                return (
                                    <li>{direction}</li>
                                )
                            })}
                        </ol>
                    </div>

                </div>
            </Layout>  
        );
    };
};

module.exports = Show;  