const React = require('react');  
const Layout = require('../components/Layout');      

class Index extends React.Component {   
    render() {
        return (                        
            <Layout logged={this.props.logged} user={this.props.user}>
                <div>                       
                    <h1>All Recipes</h1> 
                    <div className='across'> {this.props.recipes.map((recipe, i) => {
                        return (
                            <div className='card' key={recipe._id}>
                                <a href={`/recipes/${recipe._id}`}><img src={`${recipe.images[0]}`} /></a>
                                <h5>{recipe.name}</h5>
                            </div>
                        )
                    })} 
                    </div>  
                </div>
            </Layout>  
        );
    };
};

module.exports = Index;     