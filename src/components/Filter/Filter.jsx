import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import classes from './Filter.module.css';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <div className="nav">
  <Menu vertical>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}>
      Сортировка по цене: (дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}>
      Сортировка по цене: (дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'company'}
      onClick={setFilter.bind(this, 'company')}>
      Брэнд
    </Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите запрос..."
      />
    </Menu.Item>
  </Menu>
  </div>
);

export default Filter;
