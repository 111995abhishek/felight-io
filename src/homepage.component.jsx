import React from 'react';
import  './homepage.styles.scss';

const HomePage = () => {
    return (
        
        <div className="homepage">
            <div className="categories-container">
                <div className='category-item'>
                    <div className="content-holder">
                        <h1 className="title">Java Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>
                <div className='category-item'>
                    <div className="content-holder">
                        <h1 className="title">Javascript Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>
                <div className='category-item'>
                    <div className="content-holder">
                        <h1 className="title">Python Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>
                <div className='category-item'>
                    <div className="content-holder">
                        <h1 className="title">Data Science</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;