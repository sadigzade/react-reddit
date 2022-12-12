import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Header } from '../shared/Header';

window.addEventListener('load', () => {
  hydrateRoot(document.getElementById('react_root'), Header());
});
