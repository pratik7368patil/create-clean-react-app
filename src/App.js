import './App.css';
import Typography from '@mui/material/Typography';

function App() {
    const comps = ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "subtitle1", "subtitle2"];
    return (
        <div className="App">
            {comps.map((variant, i) => {
                return <Typography variant={variant} key={i}>Clean React App</Typography>
            })}
        </div>
    );
}

export default App;
