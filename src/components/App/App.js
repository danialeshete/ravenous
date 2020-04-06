import React from 'react';
import logo from './logo.svg';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const businesses = [business, business, business, business, business, business];
export class App extends React.Component {
  
    render () {
        return (
        <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList businesses={businesses}/>
      </div>)
    }
}

export default App;
