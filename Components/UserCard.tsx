import Link from 'next/link';
import styles from '@/Styles/Components/UserCard.module.css';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    bio: string | null;
    image: string | null;
}

export default function UserCard({ id, name, age, bio, image }: Props) {
    return (
        <div className={styles.card}>
            <img
                src={image ?? '/mememan.webp'}
                alt={`${name}'s profile`}
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
                <p>{bio}</p>
            </div>
        </div>
    );
}