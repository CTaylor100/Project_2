const React = require('react');  
const Layout = require('../components/Layout');      

class New extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div className='vert'>                       
                    <h1 className ='entire'>ADD RECIPE</h1> 
                    <div className='across'>
                        <form action='/recipes' method='POST'>
                            <div className = 'entire longInput'><p>Recipe Name: </p><input type='text' name='name' /></div>
                            <div className = 'entire longInput'><p>Image Links: </p><input type='text' name='images[]' /></div>
                            <div className='across'>
                                <div className='addIng longInput'>
                                    <p>Ingredients: </p>
                                    <input type='text' name='ingredients[]' /><br/>
                                    <input type='text' name='ingredients[]' /><br/>
                                    <input type='text' name='ingredients[]' /><br/>
                                    <input type='text' name='ingredients[]' /><br/>
                                    <input type='text' name='ingredients[]' /><br/>
                                </div>
                                <div className='addDirect longInput'>
                                    <p>Directions: </p>
                                    <input type='text' name='directions[]' /><br/>
                                    <input type='text' name='directions[]' /><br/>
                                    <input type='text' name='directions[]' /><br/>
                                    <input type='text' name='directions[]' /><br/>
                                    <input type='text' name='directions[]' /><br/>
                                </div>
                            </div>
                            <input className='formSubmit blackButton' type='submit' value='Add Recipe' />
                        </form>
                    </div>
                </div>
            </Layout>  
        );
    };
};

module.exports = New;  