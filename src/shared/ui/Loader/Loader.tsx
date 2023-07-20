import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
    colorWhite?: boolean;
}
export const Loader = (props: LoaderProps) => {
    const { colorWhite, className } = props;

    const mods: Modes = {
        rollerWhite: colorWhite,
    };
    return (
        <div className={classNames('lds-roller', mods, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
