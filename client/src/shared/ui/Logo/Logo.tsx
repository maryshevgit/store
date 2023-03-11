import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.Logo, {}, [className])}>
            STORE
        </div>
    );
};
