const React = require('react');  
const Layout = require('../components/Layout');      

class Home extends React.Component {   
    render() {
        return (                        
            <Layout>
                <div>                       
                    <h1>Home Page</h1>    
                </div>
            </Layout>  
        );
    };
};

module.exports = Home;                 
