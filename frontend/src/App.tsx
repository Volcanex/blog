import styles from './App.module.scss';
import { Map } from './components/map/map';
import { User } from './components/user/user';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <User className={styles.navbar} />
                <p>Risk test implementation.</p>
                <Map />
            </header>
        </div>
    );
}

export default App;
