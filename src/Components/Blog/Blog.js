import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
        <h4>Difference between  Authorization and Authentication</h4>    
            <p>Authentication is like when a user enter his password and email,system check he is the valid user or not.if match
                user are allowed else he is not allowed to enter the system. Authorization means access level of the system.
                For example in a web app some user has role as admin and some user has role of user.user can not change the 
                system or any setting where admin can  change all the system configuration .
                 </p>
                 <h4>Why we are using firebase?What other option do we have to implement?</h4>
            <p>  We use firebase for hosting our web app,mobile app. We also use firebase to authorize the user.To keep user information secure we use firebase database .
                 We also can use other popular tech giant company like google,facebook,github,twitter login system in our web app using 
                 firebase.
                 There are many firebase alternatives.Parse is also a used to build backend of the app.
                 We can also use aws amplify.we can also host web and mobile app using amplify though it is quite expensive.
                 Superbase is also a alternative.it is open source.</p>  

               <h4>What other service firebase provide other than Authentication</h4>
               Firebase provide hosting for mobile ,ios ,web app.user ca  
            
        </div>
    );
};

export default Blog;