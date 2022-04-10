import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import Todo from './Todo';

ReactDOM.createRoot(document.querySelector('#root')).render(<Todo />);