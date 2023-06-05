import { createBoard } from '@wixc3/react-board';
import { User } from '../../../components/user/user';

export default createBoard({
    name: 'User',
    Board: () => <User />,
    environmentProps: {
        canvasWidth: 648,
    },
});
