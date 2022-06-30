import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='section'>
            <Container>
                <h2 className='section-title my-5'>Blogs</h2>

                <div className="my-5">

                    <div className="blog border rounded p-3 my-4">
                        <h4>How will you improve the performance of a React Application?</h4>
                        <p className='mt-4'>Performance is very important for a web application. We can improve the performance of a React Application by following some steps. <br />1. We should use immutable data structures for our react app. <br />2. We should use function or stateless component and use React.PureComponent. <br />3. We should seperate the third-party code form our app code. <br /> 4. We should optimize our dependencies. <br />5. We can use React.Fragments to avoid addition html elements. <br />6. We should avoid inline function definition in the render function of our app. <br /> 7. We should use optimized image in our project.</p>
                    </div>    
                    <div className="blog border rounded p-3 my-4">
                        <h4>What are the different ways to manage a state in a React application?</h4>
                        <p className='mt-4'>In React there is a build in state in every React component. This state stores the property values of the component in an object. Every state update re-renders all relevant components and it keeps data form different compnent in-sync. There are different ways to manage a state in a React application. Among them Hooks, Context API, and Apollo Link States are mostly used.</p>
                    </div>    
                    <div className="blog border rounded p-3 my-4">
                        <h4>How does prototypical inheritance work?</h4>
                        <p className='mt-4'>When ever we console.log() an object we can see there is an internal property [[Prototype]] in every object. We can add methods and properties in an object using the javascript feature Prototypical inheritance. An object can be inherited by another object using this method. We could get or set [[Prototype]] by using Object.getPrototypeOf and Object.setPrototypeOf before. But Now it is being set using __Proto__.</p>
                    </div>    
                    <div className="blog border rounded p-3 my-4">
                        <h4>Why you do not set the state directly in React?</h4>
                        <p className='mt-4'>There are some reason to not set the state directly in React. For example, if we have const [products, setProducts] = useState([]). Then we do not set products = [...] instead, we use the setProducts. Because if we do so then the state should be replaced by the update we made. Then we won't get any initial value. If we set the state directly then we will loss our control of the state across all components.</p>
                    </div>    
                    <div className="blog border rounded p-3 my-4">
                        <h4>What is a unit test? Why should write unit tests?</h4>
                        <p className='mt-4'>Unit test is very important to isolate written code to test and check if the code works perfecty. It is very important in delevlopment process. If the code is not working perfectly then you can easy find out the error through unit test. We should write unit tests to catch the error at the earlier stage. It makes the debbugging processes easier. We can quickly make changes to the code, re-use code, migrating to new projects etc.</p>
                    </div>    
                </div>
            </Container>        
        </div>
    );
};

export default Blogs;