const React = require('react');  
const Layout = require('../components/Layout');      

class SignUp extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div>                       
                    <h1>Sign In</h1> 
                    <form className='vert topMargin' action="/users/signin" method="POST">                 
                        <div className='across userInput'><p>Username: </p><input type="text" name="username"/></div>
                        <div className='across userInput'><p>Password: </p><input type="password" name="password" /></div>
                        <div className='across userInput'><p></p><input type="submit" value="Sign In" />     </div>        
                    </form>
                </div>
            </Layout>  
        );
    };
};

module.exports = SignUp;    