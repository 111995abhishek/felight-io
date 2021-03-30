import React from 'react';
import './category-item.styles.scss';

const CategoryItem = ({title}) => (
        <div className='category-item'>
            <div className="content-holder">
                <h1 className="title">Javascript Full Stack</h1>
                <span className='subtitle'>Know More</span>
            </div>
        </div>
);

export default CategoryItem;