'use static'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog Index',
};

export default function Blog() {
    return (
    <main>
        <div>
            <h1>Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci aperiam architecto assumenda.</p>
        </div>
    </main>
    );
}