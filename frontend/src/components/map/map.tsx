import styles from './map.module.scss';
import classNames from 'classnames';
import map from '../../assets/default_map.svg';

export interface MapProps {
    className?: string;
    mapId?: string; // Optional prop to determine the specific SVG variation
}

export const Map = ({ className, mapId }: MapProps) => {
    return (
        <div className={classNames(className, styles.mapBackground)}>
            <img src={map} alt="Map" />
        </div>
    );
};
