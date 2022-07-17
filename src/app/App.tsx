import Content from './components/content';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
