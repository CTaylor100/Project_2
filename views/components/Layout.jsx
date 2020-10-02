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
                    <nav className='vert'>
                        <div className='logo'>FOODIE</div>
                        { (this.props.logged !== true) ?
                            <div className='across userArea'>
                                <a href='/users/signin'>Sign In</a>
                                <a href='/users/signup'>Register</a>
                            </div> :
                            <div className='across userArea'>
                                <a href='#'>{this.props.user.username}</a>
                                <form action='/users/signout?_method=DELETE' method='POST'>
                                    <input className='logOut' type="submit" value="Log Out" />
                                </form>
                            </div> 
                        }
                        <div className='search'>
                            <form>
                                <input type='text' placeholder='Search' />
                            </form>
                        </div>
                        <div>
                            <a href='/recipes'>HOME</a>
                        </div>
                        <div>
                            <a href='/recipes/new'>ADD RECIPE</a>
                        </div>
                    </nav>
                    {/* <div className = 'entire'> */}
                        {this.props.children}                   
                    {/* </div> */}
                </body>
            </html>
        );
    };
};

module.exports = Layout;   