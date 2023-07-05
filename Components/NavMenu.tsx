import Link from 'next/link'
import Image from 'next/image'
import styles from '@/Styles/Components/NavMenu.module.css'
import {SignInButton, SignOutButton} from "@/Components/Buttons";
import AuthCheck from "@/Components/AuthCheck";

export default function NavMenu() {
    return(
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image src={"../Img/logo.svg"} alt={"Nextspace Logo"} width={216} height={30} />
            </Link>
            <ul className={styles.Links}>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/users">Users</Link></li>
                <li><SignInButton /></li>
                <li><AuthCheck><SignOutButton /></AuthCheck></li>
            </ul>
        </nav>
    )
}