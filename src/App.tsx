import './App.css';

type PackingItem = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const initialItems: PackingItem[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={initialItems} />
      <Stats items={initialItems} />
    </div>
  );
};

const Logo = () => <h1>🏝️ Far Away 🧳</h1>;

const Form = () => (
  <div className="add-form">
    <h3>What do you need for your trip</h3>
  </div>
);

type PackingListProps = {
  items: PackingItem[];
};

const PackingList = ({ items }: PackingListProps) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

type ItemProps = {
  item: PackingItem;
};

const Item = ({ item }: ItemProps) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

type StatsProps = {
  items: PackingItem[];
};

const Stats = ({ items }: StatsProps) => {
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percent = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        🧳 You have {numItems} items on your list, and you already packed{' '}
        {numPacked} ({percent}%)
      </em>
    </footer>
  );
};

export default App;