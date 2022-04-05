import React from 'react';

const Blogs = () => {
    return (
        <section>
            <div className='bg-slate-50 m-5 p-5 rounded shadow-md'>
                <h4 className='text-2xl font-medium mb-3'>What is semantic tag? </h4>
                <p className='text-lg'>A semantic element is an element of code that uses words to clearly represent what that element contains, in human language.
                    Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                    In HTML4, developers have to use their own id/class names to style elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc.
                    This is so difficult for search engines to identify the correct web page content. Now in HTML5 elements (header, footer, nav, section, article), this will become easier.
                </p>
            </div>

            <div className='bg-slate-50 m-5 p-5 rounded shadow-md'>
                <h4 className='text-2xl font-medium mb-3'>What is contex API?</h4>
                <p className='text-lg'> The React Context API provides the programmer a way to pass data from component to component without having to pass down props manually from each component to another.
                    The React Context API is a component structure, which allows us to share data across all levels of the application.
                    React Context API is a way to essentially create global variables that can be passed around in a React app.
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                </p>
            </div>
        </section>
    );
};

export default Blogs;