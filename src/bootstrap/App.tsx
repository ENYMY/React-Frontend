import ErrorBoundary from "../components/ui-elements/common/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div>Hello</div>
    </ErrorBoundary>
  );
}

export default App;
