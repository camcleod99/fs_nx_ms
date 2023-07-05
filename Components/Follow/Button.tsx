import { getServerSession } from 'next-auth';
import Client from './Client';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'


interface Props {
    targetUserId: string;
}

export default async function Button({ targetUserId }: Props) {
    const session = await getServerSession(authOptions);

    const currentUserId = await prisma.user
        .findFirst({ where: { email: session?.user?.email! } })
        .then((user) => user?.id!);

    const isFollowing = await prisma.follows.findFirst({
        where: { followerId: currentUserId, followingId: targetUserId },
    });

    return (
        <Client targetUserId={targetUserId} isFollowing={!!isFollowing} />
    );
}