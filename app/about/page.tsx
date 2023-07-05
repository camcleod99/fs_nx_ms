'use static'
import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
    title: 'About',
    description: 'About Page',
};

export default function About() {
    return (
    <main>
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur beatae dolore et eum hic</p>
        </div>
    </main>
    );
}