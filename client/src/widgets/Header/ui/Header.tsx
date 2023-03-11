import { classNames } from 'shared/lib/classNames/classNames';
import { Logo } from 'shared/ui/Logo/Logo';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Logo
                className="headerLogo"
            />

        </header>
    );
};
