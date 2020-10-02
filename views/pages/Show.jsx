const React = require('react');  
const Layout = require('../components/Layout');      

class Show extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div className='vert'>    
                    <div className='across userArea'>
                        <h1>{this.props.recipe.name}</h1> 
                        <div className='across'>
                            <a className='zero' href={`/recipes/${this.props.recipe._id}/edit`}>
                                <button className='blackButton'>EDIT</button>
                            </a>
                            <form className='zero' action={`/recipes/${this.props.recipe._id}?_method=DELETE`} method='POST'>
                                <input className='blackButton' type='submit' value='DELETE' />
                            </form>
                        </div>
                    </div>                   
                    <div className='across'>
                        <div className='card'>
                            <img src={`${this.props.recipe.images[0]}`} />
                        </div>
                        <div className='card ingredients'> 
                            <h3>INGREDIENTS</h3>
                            <ul> 
                                {this.props.recipe.ingredients.map((ingredient, i) => {
                                    return (
                                        <li key={i}>{ingredient}</li>
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
                                    <li key={i}>{direction}</li>
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