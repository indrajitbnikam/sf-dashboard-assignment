import './App.scss';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import DashboardPage from './pages/dashboard/dashboard.page';

function App() {
  return (
    <div className="app-container">
      <Header />
      <DashboardPage />
      <Footer />
    </div>
  );
}

export default App;
