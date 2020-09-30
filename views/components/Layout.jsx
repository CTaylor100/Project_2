const React = require('react');        

class Layout extends React.Component {   
    render() {
        return (                        
            <html lang='en' dir='ltr'>
                <head>
                    <meta charSet='utf-8'/>  
                    <meta name="viewport" content="width=device-width, initial-scale=1" />      
                    <title>Recipe Book</title> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                    <link rel='stylesheet' href='/style.css'></link>   
                </head>
                <body className='across'>
                    {/* <h1>{this.props.title}</h1>*/}
                    <nav className='vert'>
                        <div className='logo'>FOODIE</div>
                        <div className='across userArea'>
                            <a href='#'>Sign In</a>
                            <a href='#'>Register</a>
                        </div>
                        <div className='search'>
                            <form>
                                <input type='text' placeholder='Search' />
                            </form>
                        </div>
                    </nav>
                    <div className = 'entire'>
                        {this.props.children}                   
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Layout;   