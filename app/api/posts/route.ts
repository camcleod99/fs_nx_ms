import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

const posts = [
    {
        title: 'Test 1',
        slug: 'test-1',
        content: 'This is the first test. lorem ipsum dolor sit amet'
    },
    {
        title: 'Test 2',
        slug: 'test-2',
        content: 'This is the second test. lorem ipsum dolor sit amet'
    }
]

export async function GET(){
    const session = await getServerSession()

    return NextResponse.json(posts)
}