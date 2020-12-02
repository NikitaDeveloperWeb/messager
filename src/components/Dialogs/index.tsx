import React from 'react';

const listDialogs = [
  {
    name: 'Nikita Rusakov',
    username: '@rusak',
  },
  {
    name: 'Kirito Kun',
    username: '@kirito',
  },
  {
    name: 'Max Holloway',
    username: '@hollmax',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
  {
    name: 'Evgen Sergevich',
    username: '@evgeha',
  },
];

function Dialogs() {
  const [activeItem, setactiveItem] = React.useState(0);

  const onSelectItem = (index: number) => {
    setactiveItem(index);
  };

  return (
    <div className="wrapper_dialogs">
      <ul>
        {listDialogs.map((obj, index) => (
          <li
            className={activeItem === index ? 'dialogs_active' : 'dialogs'}
            key={`${obj}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            <h2>{obj.name}</h2>
            <p>{obj.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dialogs;
