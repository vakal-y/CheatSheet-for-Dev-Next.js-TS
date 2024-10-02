import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/'>Home</Link>
        </header>
    )
};

export { Header };


