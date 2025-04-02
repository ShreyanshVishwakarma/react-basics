import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2'
import reportWebVitals from './reportWebVitals';
import Accordion from './accordian';
import Randomhex from './randomcolor/Randomhex';
import StarRating from './star-rating';
import ImageSlider from './image-slider';
import Loadmore from './laod-more';
import NestedMenu from './nested-menu';
import LightDarkMode from './light-dark-mode';
import OR from './QR-code-generator/OR';
import Modal from './modal/Modal';
import Profile_finder from './github-profile-finder/Profile_finder';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Loadmore />); // <App /> <App2 /> <Accordion /> <Randomhex /> <StarRating /> <ImageSlider /> <Loadmore />
reportWebVitals();
