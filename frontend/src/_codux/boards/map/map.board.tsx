import { createBoard } from '@wixc3/react-board';
import { Map } from '../../../components/map/map';

export default createBoard({
    name: 'Map',
    Board: () => <Map />
});
